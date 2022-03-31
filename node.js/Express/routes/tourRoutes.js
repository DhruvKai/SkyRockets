const express = require('express');
const tourConroller = require('./../controllers/tourController');
//route handlers

const router = express.Router();

router.route('/').get(tourConroller.getAllTours).post(tourConroller.createTour);

router
  .route('/:id')
  .get(tourConroller.getTour)
  .patch(tourConroller.updateTour)
  .delete(tourConroller.deleteTour);

module.exports = router;
