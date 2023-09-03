const {Router} = require('express');
const { findAll, findOne, findInfo, updateProfile, updateBalance, updatePassword, profile } = require('../controllers/user.controller');
const { currentUser } = require('../middlewares/current-user.middleware');
const { isAdmin } = require('../middlewares/is-admin.middleware');
const { isAuth } = require('../middlewares/is-auth.middleware'); 

const router = Router();

router.get('/users', isAuth, currentUser, isAdmin, findAll);
router.get('/users/:id', isAuth, currentUser, isAdmin, findOne);
router.get('/user/info', isAuth, currentUser, findInfo);
router.put('/user/profile/update', isAuth, currentUser, updateProfile)
router.put('/user/balance', isAuth, currentUser, updateBalance);
router.put('/user/password', updatePassword);

router.get('/user/profile', isAuth, currentUser, updateProfile, profile)


module.exports = router;