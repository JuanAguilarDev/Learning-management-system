const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;
const Role = db.role;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;
    next();
  });
};


isTutor= (req, res, next) => {
  console.log(req.userId, 'id')
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    console.log(user)

    Role.find(
      {
        _id: { $in: user.roles }
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        console.log(roles)
        if (roles[0].name === "tutor") {
          next();
          return;
        }


        res.status(403).send({ message: "Require tutor Role!" });
        return;
      }
    );
  });
};


const authJwt = {
  verifyToken,
  isTutor,
};
module.exports = authJwt;
