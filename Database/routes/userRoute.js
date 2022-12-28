const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

// router.route('/').post(userController.createUser);

router.route('/:id').get(userController.getUser);

router.route('/').get(authController.protect, userController.getAllUsers);

//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);

module.exports = router;
