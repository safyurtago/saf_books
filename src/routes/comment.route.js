const {Router} = require('express');

const { isAuth } = require('../middlewares/is-auth.middleware');
const { isAdmin } = require('../middlewares/is-admin.middleware');
const { currentUser } = require('../middlewares/current-user.middleware');
const { create, findAll, findOne, deleteOne } = require('../controllers/comment.controller');

const router = Router();

router.post('/comment', isAuth, currentUser, create)
router.get('/comments', findAll);
router.get('/comment/:id', findOne);

router.delete('/comment/delete/:id', isAuth, currentUser, isAdmin, deleteOne);


module.exports = router;