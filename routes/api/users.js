const express = require('express');
const {auth, wrapper} = require("../../ErrorAndValidate/")

const router = express.Router()
const ctrl = require("../../UsersFunk/index");
router.get('/current', wrapper(auth), wrapper(ctrl.getCurrent));

module.exports = router;