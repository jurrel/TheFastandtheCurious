const express = require('express');

const { csrfProtection, asyncHandler } = require('./utils')
const db = require('../db/models')
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');

// const { User } = require('../db/models')
const { loginUser, logoutUser } = require('../auth')

const router = express.Router();




module.exports = router
