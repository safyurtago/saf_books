const {Router} = require('express');

const { isAuth } = require('../middlewares/is-auth.middleware');
const { isAdmin } = require('../middlewares/is-admin.middleware');
const { currentUser } = require('../middlewares/current-user.middleware');
const { create, findAll, findOne, findOneForUser, findAllForUser } = require('../controllers/userReadBooks.controller');

const router = Router();

router.post('/readbooks', isAuth, currentUser, create);
router.get('/readbooks/info', isAuth, currentUser, isAdmin, findAll);  // admin
router.get('/readbook/:id', isAuth, currentUser, isAdmin, findOne); // admin
router.get('/user/readbooks', isAuth, currentUser, findAllForUser); // user
router.get('/user/readbook/:id', isAuth, currentUser, findOneForUser); // user

module.exports = router;