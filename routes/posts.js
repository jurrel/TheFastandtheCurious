const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { Post } = db;
const { check, validationResult } = require('express-validator');
const { asyncHandler } = require('./utils');


// router.get('/create', (req, res) => {
// const post = db.Post.build
// res.render('create-post', {post})
// })



// module.exports = router
