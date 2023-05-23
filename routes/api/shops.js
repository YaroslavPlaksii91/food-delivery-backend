const express = require("express");

const { shops: ctrl } = require('../../controllers');
const { ctrlWrap } = require('../../helpers');

const router = express.Router();

router.get("/", ctrlWrap(ctrl.get));

module.exports = router;