const {Router} = require('express');

const { isAuth } = require('../middlewares/is-auth.middleware');
const { isAdmin } = require('../middlewares/is-admin.middleware');
const { currentUser } = require('../middlewares/current-user.middleware');
const { create, findAll, findOne, updateOne, deleteOne } = require('../controllers/quote.controller');

const router = Router();

router.post('/quote', isAuth, currentUser, isAdmin, create)
router.get('/quotes', findAll)
router.get('/quote/:id', findOne)
router.put('/quote/update/:id', isAuth, currentUser, isAdmin, updateOne)
router.delete('/quote/delete/:id', isAuth, currentUser, isAdmin, deleteOne)

module.exports = router;