const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { Tag, ManyTags } = db;
const { asyncHandler } = require('./utils')
const { check, validationResult } = require('express-validator');



// //get by tag
router.get('/:id', asyncHandler(async (req, res) => {
    // const tagId = parseInt(req.params.id)
    const tags = await Tag.findByPk(req.params.id);
    // const post = await Tag   //
    // console.log(req.body)
    console.log(req.params)
    res.send(tags.name)
}))

module.exports = router;
