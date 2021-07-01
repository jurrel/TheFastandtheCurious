'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Users', [
        {fullName: "Simon Dean",	userName: "SimonD123",	email: "simon.d@gmail.com",	hashedPassword: "$2a$10$i.DpI4V541U7.KvKDWjwJ.GS0f7/X9CGEWX8HMC9VUoJlBuQV9jIi" },
        {fullName: "James Brown",	userName: "jamesbrownnie",	email: "james.brown@gmail.com",	hashedPassword: "$2a$10$i.DpI4V541U7.KvKDWjwJ.GS0f7/X9CGEWX8HMC9VUoJlBuQV9jIi" },
        {fullName: "Hart Devar",	userName: "Hard123",	email: "hard@gmail.com",	hashedPassword: "$2a$10$i.DpI4V541U7.KvKDWjwJ.GS0f7/X9CGEWX8HMC9VUoJlBuQV9jIi" },
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
