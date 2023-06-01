const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User } = require("../models/users");

const signup = (req, res) => {
  const {username, password} = req.body;
  if(!username || !password) return res.status(400).send({ message: "Username and password are required"});
  // Save User to Database
  User.create({
    username,
    password: bcrypt.hashSync(password || "", 8)
  })
  .then(user => {
    const token = jwt.sign({ id: user.id }, process.env.JWT_PRIVATE_KEY, {
      expiresIn: 86400 // 24 hours
    });
    res.send({ message: "User was registered successfully!", token });
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
};

const signin = (req, res) => {
  const {username, password} = req.body;
  const errMsg = "username or password is wrong!";
  if(!username || !password) return res.status(401).send({ message: errMsg });
  User.findOne({
    where: {
      username,
    }
  })
  .then(user => {
    if (!user) {
      return res.status(401).send({ message: errMsg });
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res.status(401).send({
        token: null,
        message: errMsg
      });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_PRIVATE_KEY, {
      expiresIn: 86400 // 24 hours
    });

    res.status(200).send({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      token,
    });
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
};

module.exports = {
  signin,
  signup,
}