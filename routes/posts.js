const router = require('express').Router();
const postsCtrl = require('../controllers/posts');


router.get('/', postsCtrl.index);
router.get('/:id', postsCtrl.showPost);

router.use(require('../config/auth'))
router.post('/', checkAuth, postsCtrl.createPost);
router.put('/:id', checkAuth, postsCtrl.updatePost)
router.delete('/:id', checkAuth, postsCtrl.deletePost);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Unauthorized Access Attempted'});
}

module.exports = router;