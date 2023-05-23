const express = require("express");

const { products: ctrl } = require('../../controllers');
const { ctrlWrap } = require('../../helpers');

const router = express.Router();

router.get("/", ctrlWrap(ctrl.get));

router.get("/:id", ctrlWrap(ctrl.getById));

module.exports = router;