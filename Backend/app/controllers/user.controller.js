const fs = require("fs");
const dir = require("path");
const coursesPath = dir.join(__dirname, "../upload/videos");
const User = require('../models').user;

const publicCourses = () => {
  let exist = fs.existsSync(coursesPath);
  if(exist){
    let publicCourses = fs.readdirSync(coursesPath, 'utf8');
    return publicCourses; 
  }

  return {msg: "No hay cursos disponibles aun. "}
  
}

exports.deleteUser = (req, res) => {
  User.deleteOne({_id: req.params.id}).exec((err, result) => {
    if(err){
        res.status(500).send({ message: err });
        return;
    }

    res.send({msg: "User deleted"});
});
}

exports.updateUser = (req, res) => {
  let user = {
    "email": req.body.email
  }

  User.updateOne({_id: req.params.id}, user).exec((err, result) => {
    if(err){
      res.status(500).send({ message: err });
      return;
    }

    res.send({msg: "User was updated. "});
  })
}

exports.allAccess = (req, res) => {
  res.status(200).send(publicCourses());
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.tutorBoard = (req, res) => {
  res.status(200).send("Tutor Content.");
};

