const express = require('express')

const ctrl = require("../../authFunk/index")
const wrapper = require("../../middlewares/wrapper");

const router = express.Router();
router.post('/register', wrapper(ctrl.register));
router.post("/login" , wrapper(ctrl.login))
module.exports = router;
