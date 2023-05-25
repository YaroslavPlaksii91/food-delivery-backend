const express = require("express");

const { orders: ctrl } = require('../../controllers');
const { ctrlWrap } = require('../../helpers');

const router = express.Router();

router.get("/:phone", ctrlWrap(ctrl.get));

router.post("/", ctrlWrap(ctrl.create));

module.exports = router;