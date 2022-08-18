const db = require('../models')
const Course = db.course;


exports.checkCourse = (req, res, next) => {
    // Video already uploaded
    Course.findOne({
        title: req.body.title
    }).exec((err, course) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (course) {
            res.status(400).send({ message: "Failed! title is already in use!" });
            return;
        }

        console.log("created")
        next();
    });
}