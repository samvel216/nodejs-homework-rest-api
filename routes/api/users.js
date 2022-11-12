const express = require('express');
const auth = require("../../ErrorAndValidate/auth");
const  wrapper = require("../../ErrorAndValidate/wrapper")

const router = express.Router()
const ctrl = require("../../UsersFunk/index");
router.get('/current', auth, wrapper(ctrl.getCurrent));

module.exports = router;