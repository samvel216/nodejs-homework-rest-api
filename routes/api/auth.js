const express = require('express')

const ctrl = require("../../authFunk/index")

const wrapper = (ctrl) => {
  const func = async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  return func;
};
const router = express.Router();
router.post('/register', wrapper(ctrl.register));
router.post("/login" , wrapper(ctrl.login))
module.exports = router;
