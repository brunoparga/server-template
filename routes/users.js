"use strict";

const express = require("express");
const { signin, signup } = require("../controllers/users");

const userRouter = new express.Router();

userRouter.post("/signup", signup);
userRouter.post("/signin", signin);

module.exports = userRouter;
