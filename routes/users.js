const express = require('express');

const { csrfProtection, asyncHandler } = require('./utils')
const db = require('../db/models')
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');

// const { User } = require('../db/models')
const { loginUser } = require('../auth')

const router = express.Router();




/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.get('/create', csrfProtection, asyncHandler(async (req, res) => {
  const user = db.User.build();
  res.render('create-user', { csrfToken: req.csrfToken(), user })
}));


const userValidators = [
  check('fullName')
    .exists({ checkFalsy: true })
    .withMessage('Slow your roll, you need to put your name in')
    .isLength({ max: 100 })
    .withMessage('Your name is too long'),
  check('userName')
    .exists({ checkFalsy: true })
    .withMessage('you gotta have a user name')
    .isLength({ max: 50 })
    .withMessage('Pick a shorter user name')
    .custom((value) => {
      return db.User.findOne({ where: { userName: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('That user name already exists. Vroom Vroom')
          }
        })
    }),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('you need an email')
    .isLength({ max: 255 })
    .withMessage('give us a shorter email')
    .isEmail()
    .withMessage('Can\'t fool us with that fughazi email. Give us a real one')
    .custom((value) => {
      return db.User.findOne({ where: { email: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('That email already exists. Vroom Vroom')
          }
        })
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('you need a password')
    .isLength({ max: 50 })
    .withMessage('your password is far too long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    .withMessage('Your password must include at least 1 lowecase letter, 1 uppercase letter, 1 number, and 1 special character (i.e. "!@#$%^&*")'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('you need to confirm your password')
    .isLength({ max: 50 })
    .withMessage('your password confirmation is too long')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Your confirm password does not match your original password, come on now')
      }
      return true
    })
];


router.post('/create', csrfProtection, userValidators,
  asyncHandler(async (req, res, next) => {

    const {
      fullName,
      userName,
      email,
      password
    } = req.body

    const user = db.User.build({
      fullName,
      userName,
      email
    })

    const validatorErrors = validationResult(req);


    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);

      user.hashedPassword = hashedPassword;
      await user.save();
      loginUser(req, res, user);
      res.redirect('/')

    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('create-user', {
        title: 'Register -- The Fast and the Curious -- ',
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }


  }));




module.exports = router;
