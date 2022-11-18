const express = require('express');
const auth = require("../../ErrorAndValidate/auth");
const  wrapper = require("../../ErrorAndValidate/wrapper")
const upload = require("../../ErrorAndValidate/upload")

const router = express.Router()
const ctrl = require("../../UsersFunk/index");
router.get('/current', auth, wrapper(ctrl.getCurrent));
router.patch('/avatars',auth,upload.single("avatar"),  wrapper(ctrl.updateAvatar));
module.exports = router;