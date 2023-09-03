const {Router} = require('express');

const { isAuth } = require('../middlewares/is-auth.middleware');
const { isAdmin } = require('../middlewares/is-admin.middleware');
const { currentUser } = require('../middlewares/current-user.middleware');
const { create, findAll, findOne } = require('../controllers/category.controller');


const router = Router();

router.post('/category', isAuth, currentUser, isAdmin, create)
router.get('/categories', findAll)
router.get('/category/:id', findOne)


module.exports = router;