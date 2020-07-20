const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  comment: {
    type: String,
    require: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
      type: String,
      required: true
  },
  rating: {
      type: Number
  },
  comments: {
    type: [commentSchema]
  },
  userId: {
    type: Schema.Types.ObjectId, 
    ref: 'User'
  } 
}, { timestamps: true })

module.exports = mongoose.model('Post', postSchema);

