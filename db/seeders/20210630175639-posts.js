'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('People', [
      { title: 'This Motorcyle is Sick', description: 'Check out this motorcycle, it\'s awesome. It has some red paint on it, it has some black paint on it. How cool is this thing. It goes fast, it makes loud noises. Wow, what a machine.', image: 'https://images.unsplash.com/photo-1568772585432-0bcd9add44f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80', userId: 1 },
      { title: 'Hey You, Look at This Car', description: 'Man is this car cool. It\'s sporty, it\'s nice and compact. Holey moley it\'s a nice vehicle.', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2017-lotus-evora-mmp-1545850193.jpg' },
      { title: 'Lambo... Nice', description: 'I just wanted you to take a look at this lambo!', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-lamborghini-aventador-mmp-1-1601499002.jpg' },
      { title: 'Real Car or Not?', description: 'Is this a real car? I don\'t know, you tell me.', image: 'https://content.instructables.com/ORIG/F7S/M0PL/JF34A6K1/F7SM0PLJF34A6K1.jpg?auto=webp&frame=1&width=233&height=1024&fit=bounds&md=4a81d9dde132045db74e6307ec298bbe' },
      { title: 'Off-Road Monstrocity', description: 'Big wheels, ' }

    ])
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
