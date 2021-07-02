
const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth } = require('../auth');

router.get('/create', requireAuth, csrfProtection,
    asyncHandler(async (req, res) => {
        const posts = await db.Post.build()
        const newTag = db.Tag.build();
        const tagList = await db.Tag.findAll();



// router.get('/:id(\\d+)', csrfProtection, requireAuth, asyncHandler(async (req, res, next) => {
//     const postId = parseInt(req.params.id, 10);
//     const post = await db.Post.findByPk(postId);

//     if (post.id) {
//         const comments = await db.Comment.findAll({
//             where: { postId: postId }
//         });

//         const comm = db.Comment.build();

//         const user = await db.User.findByPk(post.userId);
//         const users = await db.User.findAll();


//         //const comm = await db.Comment.build();
//         // const comments = await db.Comment.findAll();

//         const postIdentity = parseInt(req.params.id, 10);
//         console.log(postIdentity)

//        return res.render('comments', { post, user, users, comments, comm, csrfToken: req.csrfToken() })
//     }

// }))

// const commentValidators = [
//     check('description')
//         .exists({ checkFalsy: true })
//         .withMessage('You\'re need to make a comment if you\'re gonna come to this page')
//         .isLength({ max: 1000 })
//         .withMessage('You\'re comment is far too long')
// ]

// router.post('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res, next) => {

//     console.log('hello')
//     const postIdentity = parseInt(req.params.id, 10);



//     const {
//         description,
//         userId,
//         postId,
//     } = req.body;

//     const comment = db.Comment.build({
//         description,
//         userId: res.locals.user.id,
//         postId: postIdentity,
//     })

//     await comment.save();
//     return res.redirect('/')

//     // const validatorErrors = validationResult(req);
//     // console.log(validatorErrors);

//     // if (validatorErrors.isEmpty()) {
//     //   await comment.save();
//     //   return res.redirect('/')

//     // } else {

//     // }
// }))



router.get('/create', requireAuth, csrfProtection,
    asyncHandler(async (req, res) => {
        const posts = db.Post.build()
        const newTag = db.Tag.build();
        const tagList = await db.Tag.findAll();

    res.render('create-post', { posts, tagList, newTag, csrfToken: req.csrfToken() });
}));

const postValidators = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Please add a title!')
        .isLength({ max: 100 })
        .withMessage('Title has to be less than 100 characters'),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('DESCRIBE so your post isn\'t plain and boring')
        .isLength({ max: 100000 })
        .withMessage('What are you writing a book, clean it up'),
    check('image')
        .isLength({ max: 500 })
        .withMessage('Your pic URL is too long'),
];

router.post('/create', requireAuth, csrfProtection, postValidators,
    asyncHandler(async (req, res, next) => {
        // console.log(req.body)
        const {
            title,
            description,
            image,
        } = req.body;

        const post = db.Post.build({
            title,
            description,
            image,
            userId: res.locals.user.id
        });
        const validatorErrors = validationResult(req);

        if (validatorErrors.isEmpty()) {
            await post.save()
            return res.redirect('/')
        } else {
            const errors = validatorErrors.array().map((error) => error.msg);
            const tagList = await Tag.findAll();
            res.render('create-post', {

                post,
                errors,
                tagList,
                csrfToken: req.csrfToken(),
            })
        }

    }));

// router.get('/delete/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
//   const postId = parseInt(req.params.id, 10);
//   const post = await db.Post.findByPk(postId);
//   res.render('book-delete', {
//     title: 'Delete Book',
//     post,
//     csrfToken: req.csrfToken(),
//   });
// }));

// router.post('/delete/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
//   const postId = parseInt(req.params.id, 10);
//   const post = await db.Post.findByPk(postId);

<<<<<<< HEAD
router.post('/delete/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
  const postId = parseInt(req.params.id, 10);
  const post = await db.Post.findByPk(postId);

  if (res.locals.user.id === post.userId) {
      await post.destroy()
      res.redirect('/');
    }

}));


router.get('/edit/:id(\\d+)', csrfProtection,
  asyncHandler(async (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const post = await db.Post.findByPk(postId);

    if (res.locals.user.id === post.userId) {
        res.render('post-edit', {
          title: 'Edit meee',
          post,
          csrfToken: req.csrfToken(),
        });

    }
  }));


const postValidatorss = []

router.post('/edit/:id(\\d+)', csrfProtection,
  asyncHandler(async (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const postUpdate = await db.Post.findByPk(postId);


    const {
        id,
        title,
        description,

    } = req.body;

    const post = {
        id,
        title,
        description,

    };
        await postUpdate.update(post);
        res.redirect('/');
}));

router.post('/like/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
  const postId = parseInt(req.params.id, 10);
  const postUpdate = await db.Post.findByPk(postId);
    const newLike = postUpdate.postLikes + 1
    const likey = {
        postLikes: newLike
    }
    await postUpdate.update(likey)
    res.redirect('/');
}));

router.post('/hate/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
  const postId = parseInt(req.params.id, 10);
  const postUpdate = await db.Post.findByPk(postId);
    const newLike = postUpdate.postLikes - 1
    const hatey = {
        postLikes: newLike
    }
    await postUpdate.update(hatey)
    res.redirect('/');
}));
=======
//   if (res.locals.user.id === post.userId) {
//       await post.destroy()
//     }
//     res.redirect('/');


// }));

>>>>>>> comments




module.exports = router
