'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Users', [
        {fullName: "Simon Dean",	userName: "SimonD123",	email: "simon.d@gmail.com",	hashedPassword: "$2a$10$i.DpI4V541U7.KvKDWjwJ.GS0f7/X9CGEWX8HMC9VUoJlBuQV9jIi", image:"https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&h=661&q=70&fm=webp", tag:"Helooooooo" },
        {fullName: "James Brown",	userName: "jamesbrownnie",	email: "james.brown@gmail.com",	hashedPassword: "$2a$10$i.DpI4V541U7.KvKDWjwJ.GS0f7/X9CGEWX8HMC9VUoJlBuQV9jIi", image:"https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04=", tag:"This website rocks!" },
        {fullName: "simon D patterson",	userName: "test",	email: "test@gmail.com",	hashedPassword: "$2a$10$i.DpI4V541U7.KvKDWjwJ.GS0f7/X9CGEWX8HMC9VUoJlBuQV9jIi", image:"https://bestprofilepix.com/wp-content/uploads/2014/07/cute-girls-profile-pictures-for-facebook-with-apple-I-phone.jpg", tag:"Be the best you can be!" },
        {fullName: "Karen Hater",	userName: "karenSucks",	email: "k.s@gmail.com",	hashedPassword: "$2a$10$i.DpI4V541U7.KvKDWjwJ.GS0f7/X9CGEWX8HMC9VUoJlBuQV9jIi", image:"https://live.staticflickr.com/4056/5163551223_2b37e041e2_b.jpg", tag:"I love fast cars!" },
        {fullName: "John Denver",	userName: "asd",	email: "fwef@gmail.com",	hashedPassword: "$2a$10$i.DpI4V541U7.KvKDWjwJ.GS0f7/X9CGEWX8HMC9VUoJlBuQV9jIi", image:"https://upload.wikimedia.org/wikipedia/commons/c/cb/John_Denver_1974.jpg", tag:"I dont know what I am doing" },
        {fullName: "Katie Holmes",	userName: "jdsad123",	email: "johnnsdsdsyd@gmail.com",	hashedPassword: "$2a$10$i.DpI4V541U7.KvKDWjwJ.GS0f7/X9CGEWX8HMC9VUoJlBuQV9jIi", image:"http://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture-1024x1024.jpg", tag:" I'm not as old you think i am.." },
        {fullName: "Lalala",	userName: "asdasd",	email: "asd@gmail.com",	hashedPassword: "$2a$10$i.DpI4V541U7.KvKDWjwJ.GS0f7/X9CGEWX8HMC9VUoJlBuQV9jIi", image:"https://www.adobe.com/express/create/media_141efea30cca217e8cb7fb3abb8ed9d663c29d550.jpeg?width=2000&format=webply&optimize=medium", tag:"Ride or dieee.. i'll pass" },
        {fullName: "mimi",	userName: "assd",	email: "sad@gmail.com",	hashedPassword: "$2a$10$i.DpI4V541U7.KvKDWjwJ.GS0f7/X9CGEWX8HMC9VUoJlBuQV9jIi", image:"https://thumbs.dreamstime.com/z/young-women-corporate-headshot-portrait-woman-her-professional-profile-photo-92515945.jpg", tag:"let goooo" },
        {fullName: "hi Chew",	userName: "dsfds",	email: "johnnyd@gmail.com",	hashedPassword: "$2a$10$i.DpI4V541U7.KvKDWjwJ.GS0f7/X9CGEWX8HMC9VUoJlBuQV9jIi", image:"https://c8.alamy.com/comp/R2Y8W5/beauty-headshot-profile-of-beautiful-girl-with-red-lips-on-white-background-R2Y8W5.jpg", tag:"Ready to rock and roll" },
        {fullName: "Hi clarr",	userName: "wef",	email: "wefd@gmail.com",	hashedPassword: "$2a$10$i.DpI4V541U7.KvKDWjwJ.GS0f7/X9CGEWX8HMC9VUoJlBuQV9jIi", image:"https://static.wikia.nocookie.net/sonic-underground/images/0/00/Guy.jpeg/revision/latest?cb=20201121200403", tag:"Please don't look at me" },
        {fullName: "Mark Zuckerburg",	userName: "wefdewf",	email: "markieZ@gmail.com",	hashedPassword: "$2a$10$i.DpI4V541U7.KvKDWjwJ.GS0f7/X9CGEWX8HMC9VUoJlBuQV9jIi", image:"https://yourwikis.com/wp-content/uploads/2020/01/mark-zuck-img.jpg", tag:"Lalalal" },
        {fullName: "clark kent",	userName: "asf",	email: "super.med@gmail.com",	hashedPassword: "$2a$10$i.DpI4V541U7.KvKDWjwJ.GS0f7/X9CGEWX8HMC9VUoJlBuQV9jIi", image:"https://sites.rutgers.edu/demo-project/wp-content/uploads/sites/16/2017/12/christopher-reeve-superman.jpg", tag:"I am not superman" },
        {fullName: "kim dom",	userName: "asssad",	email: "werwf@gmail.com",	hashedPassword: "$2a$10$i.DpI4V541U7.KvKDWjwJ.GS0f7/X9CGEWX8HMC9VUoJlBuQV9jIi", image:"https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg", tag:"Hi mom" },

      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Users', null, {});
  }
};
