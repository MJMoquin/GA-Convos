const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
      type: [String]
    },
    userId: {
      type: Schema.Types.ObjectId, 
      ref: 'User'
    } 
}, { timestamps: true })

module.exports = mongoose.model('Post', postSchema);

