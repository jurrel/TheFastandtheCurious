'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      { description: 'Wow, this is a cool vehicle', userId: 2, postId: 1, commentLikes: 2, createdAt: new Date(), updatedAt: new Date()},
      { description: '5 stars for you my friend', userId: 3, postId: 8, commentLikes: 2, createdAt: new Date(), updatedAt: new Date() },
      { description: 'Holy Moly mamamama  that is so cool', userId: 5, postId: 1, commentLikes: 2, createdAt: new Date(), updatedAt: new Date()},
      { description: 'Holy Moly that sssssis so cool', userId: 6, postId: 1, commentLikes: 2, createdAt: new Date(), updatedAt: new Date()},
      { description: 'Holy Moly that sdsdsdis so cool', userId: 7, postId: 1, commentLikes: 2, createdAt: new Date(), updatedAt: new Date()},

    ], {
      fields: ['description', 'userId', 'postId']
    });
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
    return queryInterface.bulkDelete('Comments', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
