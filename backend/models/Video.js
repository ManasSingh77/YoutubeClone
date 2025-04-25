const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  username: String,
  text: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const videoSchema = new mongoose.Schema({
  name: String,
  views: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
  comments: [commentSchema],
}, { timestamps: true });

module.exports = mongoose.model('Video', videoSchema);