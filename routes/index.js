"use strict";

const express = require("express");
const userRouter = require("./users");
const router = new express.Router();
router.use(userRouter);

module.exports = router;
