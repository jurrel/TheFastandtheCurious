var express = require('express');
const session = require('express-session');
const { csrfProtection, asyncHandler } = require ('./utils')
const db = require('../db/models')
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.get('/create', csrfProtection, asyncHandler(async (req, res) => {
  const user = db.User.build();
  res.render('create-user', {csrfToken: req.csrfToken(), user})
}));

// router.post('/create', csrfProtection, asyncHandler(async (req, res, next) => {
//   const {
//     fullName,
//     userName,
//     email,
//     password
//   } = req.body

//   const user = await db.User.build()


// }));




module.exports = router;
