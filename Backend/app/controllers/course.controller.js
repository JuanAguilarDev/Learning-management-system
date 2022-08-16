const multer = require('multer');
const db = require("../models");
const Course = db.course;

// Storage
const storage = multer.diskStorage({
    // Destination for files
    destination: function(req, file, callback){
        callback(null, '../upload/videos');
    },

    // Add back destination
    filename:function(req, file, callback){
        callback(null, file.originalname)
    }
});

// Upload parameters for multer
const upload = multer({
    storage: storage, 
    limits:{
        fieldSize: 1024 * 1024 * 10
    }
})

exports.getAllCourses = (req, res) => {
    console.log(Course.find());
} 