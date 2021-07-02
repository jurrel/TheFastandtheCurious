'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('ManyTags', [
      { tagId: 1, postId: 1, createdAt: new Date(), updatedAt: new Date() },
      { tagId: 2, postId: 2, createdAt: new Date(), updatedAt: new Date() },
      { tagId: 3, postId: 3, createdAt: new Date(), updatedAt: new Date() },
      { tagId: 3, postId: 4, createdAt: new Date(), updatedAt: new Date() },
      { tagId: 2, postId: 5, createdAt: new Date(), updatedAt: new Date() },
      { tagId: 2, postId: 6, createdAt: new Date(), updatedAt: new Date() },
      { tagId: 4, postId: 7, createdAt: new Date(), updatedAt: new Date() },
      { tagId: 4, postId: 8, createdAt: new Date(), updatedAt: new Date() },
      { tagId: 1, postId: 8, createdAt: new Date(), updatedAt: new Date() },
      

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('ManyTags', null, {});
  }
};
