'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Tags', [
      { name: 'Motorcycles' },
      { name: 'classics' },
      { name: 'Supercar' },
      { name: 'Sport Cars' },
      { name: 'Off-road Adventure'},
      { name: 'JDM'},
      { name: 'Off-road Vehicles'},
      { name: 'Off-road Vehicles'},
      { name: 'Off-road Vehicles'},
      { name: 'Off-road Vehicles'},
      { name: 'Off-road Vehicles'},

    ], {
      fields: ['name']
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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Tags', null, {});
  }
};
