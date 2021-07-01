const express = require('express');

const { csrfProtection, asyncHandler } = require('./utils')
const db = require('../db/models')
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
const { requireAuth } = require('../auth')

// const { User } = require('../db/models')
const { loginUser, logoutUser } = require('../auth')

const router = express.Router();


/* GET users listing. */
router.get('/:id(\\d+)', async (req, res, next) => {
  const user = await db.User.findByPk(res.locals.user.id)
  res.render('home-user', {user})
});

router.get('/all', async (req, res, next) => {
  const users = await db.User.findAll()
  res.render('all-user', {users})
});

router.post('/update/:id(\\d+)', asyncHandler(async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const userUpdate = await db.User.findByPk(userId);

  const { tag } = req.body

  const thisTag = {tag}
  await userUpdate.update(thisTag)

  res.redirect('/');

}));

router.get('/create', csrfProtection, asyncHandler(async (req, res) => {
  const user = db.User.build();
  res.render('create-user', { csrfToken: req.csrfToken(), user })
}));


const userValidators = [
  check('fullName')
    .exists({ checkFalsy: true })
    .withMessage('Slow your roll, you need to put your full name in.')
    .isLength({ max: 100 })
    .withMessage('Your name is too long.'),
  check('userName')
    .exists({ checkFalsy: true })
    .withMessage('Pick a real user name, bum.')
    .isLength({ max: 50 })
    .withMessage('No Fast username is that long - pick a shorter user name.')
    .custom((value) => {
      return db.User.findOne({ where: { userName: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('Don\'t be a copy cat, that username is being used.')
          }
        })
    }),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('You need a valid email address.')
    .isLength({ max: 255 })
    .withMessage('Your email is too long. Use a better email!')
    .isEmail()
    .withMessage('Can\'t fool us with that fughazi email. Give us a real one')
    .custom((value) => {
      return db.User.findOne({ where: { email: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('Identity theft is breaking the law. That email already exists!')
          }
        })
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Use a valid safe password!')
    .isLength({ max: 50 })
    .withMessage('You won\'t remember a password that long. Choose another password.')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    .withMessage('Your password must include at least 1 lowecase letter, 1 uppercase letter, 1 number, and 1 special character (i.e. "!@#$%^&*").'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('You need to confirm your password.')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Your passwords need to match, come on now!')
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
      password,
      image,
      tag
    } = req.body

    const user = db.User.build({
      fullName,
      userName,
      email,
      image,
      tag
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

router.get('/login', csrfProtection, asyncHandler(async(req, res) => {
  const user  = db.User.build()
  res.render('login-user', { title: 'Login', user, csrfToken: req.csrfToken() })
}))

const loginValidators = [
  check('userName')
    .exists({ checkFalsy: true })
    .withMessage('Did you forget your User Name?')
    .custom((value) => {
      return db.User.findOne({ where: { userName: value } })
        .then((user) => {
          if (!user) {
            return Promise.reject('That username does not exist!')
          }
        })
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Did you forget your Password?'),

];

router.post('/login', csrfProtection, loginValidators, asyncHandler( async (req, res, next) => {
    const { userName, password } = req.body;

    const validatorErrors = validationResult(req)
    let errors = [];

    if (validatorErrors.isEmpty()) {
        const user = await db.User.findOne({where: {userName}})

        if (user !== null) {
            const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString())

            if (passwordMatch) {
                loginUser(req, res, user)
                return res.redirect('/');
            }
        }
        errors.push('Login attempt failed with the provided email address and password combination')
    } else {
        const errors = validatorErrors.array().map((error) => error.msg)
        res.render('login-user', {
            title: 'Login -- The Fast and the Curious --',
            userName,
            errors,
            csrfToken: req.csrfToken()
        });
    }
}));


router.get('/logout', (req, res) => {
    logoutUser(req, res)
    res.redirect('/users/login')
})




module.exports = router;
