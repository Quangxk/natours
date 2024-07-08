const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router('/api/v1/users');

router
  .route('/')
  .get(usersController.getAllUsers)
  .post(usersController.addNewUser);
router
  .route('/:id')
  .get(usersController.getUserById)
  .patch(usersController.updateUserById)
  .delete(usersController.deleteUserById);

module.exports = router;
