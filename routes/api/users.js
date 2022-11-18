const express = require('express');
const auth = require("../../middlewares/auth");
const  wrapper = require("../../middlewares/wrapper")
const upload = require("../../middlewares/upload")

const router = express.Router()
const ctrl = require("../../UsersFunk/index");
router.get('/current', auth, wrapper(ctrl.getCurrent));
router.patch('/avatars',auth,upload.single("avatar"),  wrapper(ctrl.updateAvatar));
module.exports = router;