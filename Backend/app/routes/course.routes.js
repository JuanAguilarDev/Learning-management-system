const multer = require('multer');
const { authJwt, courseUpload } = require("../middlewares");
const controller = require("../controllers/course.controller");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/course/all", controller.getAllCourses);

  app.get("/api/course/upload",
    controller.getUploadView);

  app.put("/api/course/update/:id", [authJwt.verifyToken, authJwt.isTutor], controller.updateCourse);

  app.post("/api/course/upload", 
  [courseUpload.checkCourse, authJwt.verifyToken, authJwt.isTutor],
  controller.upload.single('video'),  
  controller.uploadCourse) // Name identifier

  app.get("/api/course/load", controller.loadVideo);

  app.get("/api/course/load/video", controller.loadVideoV)

  app.delete("/api/course/delete/:id", [authJwt.verifyToken, authJwt.isTutor], controller.deleteCourse)
};
