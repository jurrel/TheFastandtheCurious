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
        {fullName: "John Denver",	userName: "jd123",	email: "johnnyd@gmail.com",	hashedPassword: "$2a$10$i.DpI4V541U7.KvKDWjwJ.GS0f7/X9CGEWX8HMC9VUoJlBuQV9jIi", image:"https://upload.wikimedia.org/wikipedia/commons/c/cb/John_Denver_1974.jpg", tag:"I dont know what I am doing" },
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
