const express = require('express');
const UserService = require('../services/user-service');
const router = express.Router();
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
  const users = await UserService.find();
  res.send(users);
});

router.post('/register', async (req, res) => {
  console.log(req.body);
  const {
    email,
    password,
    firstname,
    lastname,
    phone,
    personalId,
    address,
    birthdate,
  } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const body = {
    email: email,
    password: hashedPassword,
    firstname: firstname,
    lastname: lastname,
    phone: phone,
    personalId: personalId,
    address: address,
    birthdate: birthdate,
  };
  const user = await UserService.createUser(body);
  console.log(user);
  res.send(user);
});

module.exports = router;
