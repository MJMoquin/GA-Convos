const Post = require('../models/post')

module.exports = {
  index,
  showPost,
  createPost,
  updatePost,
  deletePost
}

function index(req, res) {
  Post.find({})
  .then(posts => {res.json(posts)})
  .catch(error => {res.json(error)})
}

function showPost(req, res) {
  Post.findById(req.params.id)
  .then(posts => {res.json(posts)})
  .catch(error => {res.json(error)})
}

function createPost(req, res) {
  req.body.userId = req.user
  Post.create(req.body)
  .then(posts => {res.json(posts)})
  .catch(error => {res.json(error)})
}

function updatePost(req, res) {
  Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(posts => {res.json(posts)})
  .catch(error => {res.json(error)})
  
}

function deletePost(req, res) {
  Post.findByIdAndDelete(req.params.id)
  .then(posts => {res.json(posts)})
  .catch(error => {res.json(error)})
}