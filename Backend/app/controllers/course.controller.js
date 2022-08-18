const multer = require("multer");
const db = require("../models");
const dir = require("path");
const fs = require("fs");

const User = db.user;
const Course = db.course;
const coursesPath = dir.join(__dirname, '../upload/courses');

// Storage
const storage = multer.diskStorage({
    // Destination for files
    destination: function(req, file, callback){
        let exist = fs.existsSync(dir.join(coursesPath, req.headers["user-name"]));
        console.log(exist);
        if(!exist){
            fs.mkdirSync(dir.join(coursesPath, req.headers["user-name"]), true);
        }
        
        callback(null, `app/upload/courses/${req.headers["user-name"]}`);
    },
  
    // Add back destination
    filename:function(req, file, callback){
        callback(null, file.originalname);
    }
  });
  
  // Upload parameters for multer
  exports.upload = multer({
    storage: storage, 
    limits:{
        fieldSize: 1024 * 1024 * 10
    }
  });

exports.getAllCourses = (req, res) => {
    Course.find().exec((err, result) => {
        if(err){
            res.status(500).send({ message: err });
            return;
        }
        res.send(result);
    });
} 

exports.loadVideo = (req, res) => {
   res.sendFile(dir.join(__dirname, '/test.html'))
}

exports.loadVideoV = (req, res) => {
    const range = req.headers.range;
    if (!range) {
      res.status(400).send("Requires Range header");
    }
  
    // get video stats (about 61MB)
    const videoPath = dir.join(__dirname, "../upload/courses/JuanDev/video.mp4");
    const videoSize = fs.statSync(videoPath).size;
  
    // Parse Range
    // Example: "bytes=32324-"
    const CHUNK_SIZE = 10 ** 6; // 1MB
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
  
    // Create headers
    const contentLength = end - start + 1;
    const headers = {
      "Content-Range": `bytes ${start}-${end}/${videoSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": contentLength,
      "Content-Type": "video/mp4",
    };
  
    // HTTP Status 206 for Partial Content
    res.writeHead(206, headers);
  
    // create video read stream for this particular chunk
    const videoStream = fs.createReadStream(videoPath, { start, end });
  
    // Stream the video chunk to the client
    videoStream.pipe(res);
}

exports.deleteCourse = (req, res) => {
    Course.findOne({_id: req.params.id}).exec((err, result) => {
        if(err){
            res.status(500).send({ message: err });
            return;
        }

        fs.rmSync(dir.join(__dirname, `../upload/courses/JuanDev/${result.title}`))

        
    });

    Course.deleteOne({_id: req.params.id}).exec((err, result) => {
        if(err){
            res.status(500).send({ message: err });
            return;
        }

        res.send({msg: "Course deleted"});
    });
}

exports.updateCourse = (req, res) => {
    let course = {
        "description": req.body.description,
        "repository": req.body.repository,
    };
    
    Course.updateOne({_id: req.params.id}, course).exec((err, result) => {
        if(err){
            res.status(500).send({ message: err });
            return;
        }

        res.send(result);
    });
}

exports.uploadCourse = (req, res) => {
    
    
    let course = new Course({
        title: req.file.filename,
        description: req.body.description,
        repository: req.body.repository,
        video: req.file.filename,
        author: req.headers["user-name"]
    });
    
    course.save((err, course) => {
        if(err){
            res.status(500).send({ message: err });
            return;
        }

        res.send(course);
    })
}

exports.getUploadView =  (req, res) => { 
    res.sendFile('./course.html', {root: dir.join(__dirname, '../views/')});
}
