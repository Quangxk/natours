const express = require('express');
const toursController = require(`${__dirname}/../controllers/toursController`);
const router = express.Router('/api/v1/tours');
router
  .route('/')
  .get(toursController.getAllTours)
  .post(toursController.createTour);
router.route('/get-stats').get(toursController.getTourStats);
router
  .route('/:id')
  .patch(toursController.updateTourById)
  .get(toursController.getTourById)
  .delete(toursController.deleteTourById);
module.exports = router;
