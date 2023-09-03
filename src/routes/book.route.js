const {Router} = require('express');

const { isAuth } = require('../middlewares/is-auth.middleware');
const { isAdmin } = require('../middlewares/is-admin.middleware');
const { currentUser } = require('../middlewares/current-user.middleware');
const { create, findAll, findOne, updateOne, deleteOne } = require('../controllers/book.controller');

const router = Router();

router.post('/book', isAuth, currentUser, isAdmin, create)
router.get('/books', findAll);
router.get('/book/:id', isAuth, currentUser, findOne);
router.put('/book/update/:id', isAuth, currentUser, isAdmin, updateOne);
router.delete('/book/delete/:id', isAuth, currentUser, isAdmin, deleteOne);


module.exports = router;