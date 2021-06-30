'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [
      { title: 'Lorum epsum daily ', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore officiis voluptate ullam aspernatur omnis placeat ea. Voluptatem ullam, dolor a ratione, ea nostrum eveniet, molestias saepe rerum in nemo consectetur!', image: 'https://images.cdn.circlesix.co/image/1/700/0/uploads/articles/main-5774b96da399a.jpg', postLikes: 4, userId: 1, createdAt: new Date(), updatedAt: new Date () },
      { title: 'Lets ride', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore officiis voluptate ullam aspernatur omnis placeat ea. Voluptatem ullam, dolor a ratione, ea nostrum eveniet, molestias saepe rerum in nemo consectetur!', image: 'https://www.automobilemag.com/uploads/sites/5/2019/10/2020-Toyota-Supra-19.jpg?fit=around%7C875:492', postLikes: 5, userId: 2, createdAt: new Date(), updatedAt: new Date () },
      { title: 'go go', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore officiis voluptate ullam aspernatur omnis placeat ea. Voluptatem ullam, dolor a ratione, ea nostrum eveniet, molestias saepe rerum in nemo consectetur!', image: 'https://youtu.be/0xyVGQ9i-uw', postLikes: 3, userId: 1, createdAt: new Date(), updatedAt: new Date () },
      { title: 'Test4', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore officiis voluptate ullam aspernatur omnis placeat ea. Voluptatem ullam, dolor a ratione, ea nostrum eveniet, molestias saepe rerum in nemo consectetur!', image: 'https://gomechanic.in/blog/wp-content/uploads/2020/07/Vin-Diesel-Car-Collection-01.jpg', postLikes: 4, userId: 1, createdAt: new Date(), updatedAt: new Date () },
      { title: 'TEST', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore officiis voluptate ullam aspernatur omnis placeat ea. Voluptatem ullam, dolor a ratione, ea nostrum eveniet, molestias saepe rerum in nemo consectetur!', image: 'https://www.carlogos.org/review-images/fastest-japanese-sports-cars.jpg', postLikes: 2, userId: 2, createdAt: new Date(), updatedAt: new Date () },
      { title: 'hot hot', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore officiis voluptate ullam aspernatur omnis placeat ea. Voluptatem ullam, dolor a ratione, ea nostrum eveniet, molestias saepe rerum in nemo consectetur!', image: 'https://cbsnews2.cbsistatic.com/hub/i/r/2012/07/16/be88a77a-a644-11e2-a3f0-029118418759/thumbnail/640x406/8ff75445106665fd1593d64af19dfeff/56476576.jpg', xpostLikes: 7, userId: 2, createdAt: new Date(), updatedAt: new Date () },
      { title: 'This is how you dream', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore officiis voluptate ullam aspernatur omnis placeat ea. Voluptatem ullam, dolor a ratione, ea nostrum eveniet, molestias saepe rerum in nemo consectetur!', image: 'https://images-na.ssl-images-amazon.com/images/I/91mqq7leu1L.png', postLikes: 12, userId: 2, createdAt: new Date(), updatedAt: new Date () },
      { title: 'FUN', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore officiis voluptate ullam aspernatur omnis placeat ea. Voluptatem ullam, dolor a ratione, ea nostrum eveniet, molestias saepe rerum in nemo consectetur!', image: 'https://bikebrewers.com/wp-content/uploads/2015/07/cx500-cafe-racer-1-1024x683.jpg', postLikes: 5, userId: 1, createdAt: new Date(), updatedAt: new Date () },
      { title: 'this is iittt', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore officiis voluptate ullam aspernatur omnis placeat ea. Voluptatem ullam, dolor a ratione, ea nostrum eveniet, molestias saepe rerum in nemo consectetur!', image: 'https://www.carlogos.org/review-images/fastest-motorcycles.jpg', postLikes: 6, userId: 1, createdAt: new Date(), updatedAt: new Date () },
      { title: 'WHOOOOOOOOOO', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore officiis voluptate ullam aspernatur omnis placeat ea. Voluptatem ullam, dolor a ratione, ea nostrum eveniet, molestias saepe rerum in nemo consectetur!', image: 'https://i.pinimg.com/originals/cf/9f/52/cf9f52d5434f08c4183eb793ffd0d84c.jpg', postLikes: 7, userId: 1, createdAt: new Date(), updatedAt: new Date () },
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
