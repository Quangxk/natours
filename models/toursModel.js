const mongoose = require('mongoose');
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'a name is required'],
    trim: true,
    unique: true,
  },
  duration: {
    type: Number,
    required: [true, 'duration required'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'group size required'],
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
    required: false,
  },
  difficulty: {
    type: String,
    required: [true, 'difficulty required'],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'a price is required'],
  },
  discount: {
    type: Number,
  },
  summary: {
    type: String,
    required: [true, 'summary required'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'description required'],
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'image cover required'],
  },
  images: {
    type: [String],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  startDate: {
    type: [Date],
  },
});
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
