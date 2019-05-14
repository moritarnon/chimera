const router = require('express').Router();

router.use('/echo', require('../echo/echoController'));
router.use('/user', require('../user/userController'));

module.exports = router;