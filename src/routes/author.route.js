const {Router} = require('express');

const { isAuth } = require('../middlewares/is-auth.middleware');
const { isAdmin } = require('../middlewares/is-admin.middleware');
const { currentUser } = require('../middlewares/current-user.middleware');
const { create, findAll, findOne, updateOne, deleteOne } = require('../controllers/author.controller');

const router = Router();

router.post('/author', isAuth, currentUser, isAdmin, create);
router.get('/authors', findAll);
router.get('/author/:id', findOne);
router.put('/author/update/:id', isAuth, currentUser, isAdmin, updateOne);
router.delete('/author/delete/:id', isAuth, currentUser, isAdmin, deleteOne);


module.exports = router;