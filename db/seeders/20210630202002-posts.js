'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [
      { title: 'Test1', description: 'Test1', image: 'https://cdn.vox-cdn.com/thumbor/Qca-l0vs0NnMI1X4juqBFUTSDIs=/0x0:2000x1233/1400x933/filters:focal(840x457:1160x777):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66732603/hotwheels_COVER.0.jpg', userId: 1 },
      { title: 'Test2', description: 'Test2', image: 'https://cdn.vox-cdn.com/thumbor/Qca-l0vs0NnMI1X4juqBFUTSDIs=/0x0:2000x1233/1400x933/filters:focal(840x457:1160x777):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66732603/hotwheels_COVER.0.jpg', userId: 1 },
      { title: 'Test3', description: 'Test3', image: 'https://cdn.vox-cdn.com/thumbor/Qca-l0vs0NnMI1X4juqBFUTSDIs=/0x0:2000x1233/1400x933/filters:focal(840x457:1160x777):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66732603/hotwheels_COVER.0.jpg', userId: 1 },
      { title: 'Test4', description: 'Test4', image: 'https://cdn.vox-cdn.com/thumbor/Qca-l0vs0NnMI1X4juqBFUTSDIs=/0x0:2000x1233/1400x933/filters:focal(840x457:1160x777):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66732603/hotwheels_COVER.0.jpg', userId: 1 },
      { title: 'Test5', description: 'Test5', image: 'https://cdn.vox-cdn.com/thumbor/Qca-l0vs0NnMI1X4juqBFUTSDIs=/0x0:2000x1233/1400x933/filters:focal(840x457:1160x777):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66732603/hotwheels_COVER.0.jpg', userId: 1 },
      { title: 'Test6', description: 'Test6', image: 'https://cdn.vox-cdn.com/thumbor/Qca-l0vs0NnMI1X4juqBFUTSDIs=/0x0:2000x1233/1400x933/filters:focal(840x457:1160x777):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66732603/hotwheels_COVER.0.jpg', userId: 1 },
      { title: 'Test7', description: 'Test7', image: 'https://cdn.vox-cdn.com/thumbor/Qca-l0vs0NnMI1X4juqBFUTSDIs=/0x0:2000x1233/1400x933/filters:focal(840x457:1160x777):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66732603/hotwheels_COVER.0.jpg', userId: 1 },
      { title: 'Test8', description: 'Test8', image: 'https://cdn.vox-cdn.com/thumbor/Qca-l0vs0NnMI1X4juqBFUTSDIs=/0x0:2000x1233/1400x933/filters:focal(840x457:1160x777):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66732603/hotwheels_COVER.0.jpg', userId: 1 },
      { title: 'Test9', description: 'Test9', image: 'https://cdn.vox-cdn.com/thumbor/Qca-l0vs0NnMI1X4juqBFUTSDIs=/0x0:2000x1233/1400x933/filters:focal(840x457:1160x777):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66732603/hotwheels_COVER.0.jpg', userId: 1 },
      { title: 'Test10', description: 'Test10', image: 'https://cdn.vox-cdn.com/thumbor/Qca-l0vs0NnMI1X4juqBFUTSDIs=/0x0:2000x1233/1400x933/filters:focal(840x457:1160x777):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66732603/hotwheels_COVER.0.jpg', userId: 1 },
    ]);

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
    return queryInterface.bulkDelete('Posts', null, {});
    /*

      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
