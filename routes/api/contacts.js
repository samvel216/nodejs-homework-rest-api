const express = require('express')
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
const router = express.Router()

const ctrl = require("../../contactsFunc/index");

router.get('/', wrapper(ctrl.getAll));

router.get('/:id', wrapper(ctrl.getById));

router.post('/',  wrapper(ctrl.add));

router.delete('/:id', wrapper(ctrl.deleteByld))

router.put('/:id', wrapper(ctrl.updateByld))

router.patch("/:id/favorite", wrapper(ctrl.updateStatusContact))

module.exports = router
