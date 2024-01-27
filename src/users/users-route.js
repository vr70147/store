const express = require('express');
const router = express.Router();
const isAuth = require('../middlewares/auth-middleware');
const isAdmin = require('../middlewares/admin-middleware');
const UsersController = require('./users-controller');

const getUsers = UsersController.getUsers;
const getUser = UsersController.getUser;
const addUser = UsersController.addUser;
const updateUser = UsersController.updateUser;
const deleteUser = UsersController.deleteUser;
const login = UsersController.login;
const logout = UsersController.logout;
const checkRefreshToken = UsersController.checkRefreshToken;

router.get('/:id', isAuth, getUser);
router.get('/', isAuth, isAdmin, getUsers);
router.post('/token', checkRefreshToken);
router.post('/login', login);
router.delete('/logout', logout);
router.post('/register', addUser);
router.put('/:id', isAuth, updateUser);
router.delete('/:id', isAuth, deleteUser);

module.exports = router;
