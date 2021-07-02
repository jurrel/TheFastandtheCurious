'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Posts', [
      { title: 'Lets ride', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore officiis voluptate ullam aspernatur omnis placeat ea. Voluptatem ullam, dolor a ratione, ea nostrum eveniet, molestias saepe rerum in nemo consectetur!', image: 'https://www.automobilemag.com/uploads/sites/5/2019/10/2020-Toyota-Supra-19.jpg?fit=around%7C875:492', postLikes: 5, userId: 2, tagId: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'go go', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore officiis voluptate ullam aspernatur omnis placeat ea. Voluptatem ullam, dolor a ratione, ea nostrum eveniet, molestias saepe rerum in nemo consectetur!', image: 'https://www.motortrend.com/uploads/sites/5/2020/03/2021-Czinger-21C-in-London-4.jpg?fit=around%7C875:492', postLikes: 3, userId: 1, tagId: 2, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Test4', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore officiis voluptate ullam aspernatur omnis placeat ea. Voluptatem ullam, dolor a ratione, ea nostrum eveniet, molestias saepe rerum in nemo consectetur!', image: 'https://gomechanic.in/blog/wp-content/uploads/2020/07/Vin-Diesel-Car-Collection-01.jpg', postLikes: 4, userId: 4, tagId: 3, createdAt: new Date(), updatedAt: new Date() },
      { title: 'TEST', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore officiis voluptate ullam aspernatur omnis placeat ea. Voluptatem ullam, dolor a ratione, ea nostrum eveniet, molestias saepe rerum in nemo consectetur!', image: 'https://www.carlogos.org/review-images/fastest-japanese-sports-cars.jpg', postLikes: 2, userId: 2, tagId: 4, createdAt: new Date(), updatedAt: new Date() },
      { title: 'hot hot', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore officiis voluptate ullam aspernatur omnis placeat ea. Voluptatem ullam, dolor a ratione, ea nostrum eveniet, molestias saepe rerum in nemo consectetur!', image: 'https://cbsnews2.cbsistatic.com/hub/i/r/2012/07/16/be88a77a-a644-11e2-a3f0-029118418759/thumbnail/640x406/8ff75445106665fd1593d64af19dfeff/56476576.jpg', postLikes: 7, userId: 2, tagId: 3, createdAt: new Date(), updatedAt: new Date() },
      { title: 'This is how you dream', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore officiis voluptate ullam aspernatur omnis placeat ea. Voluptatem ullam, dolor a ratione, ea nostrum eveniet, molestias saepe rerum in nemo consectetur!', image: 'https://images-na.ssl-images-amazon.com/images/I/91mqq7leu1L.png', postLikes: 2, userId: 3, tagId: 4, createdAt: new Date(), updatedAt: new Date() },
      { title: 'FUN', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore officiis voluptate ullam aspernatur omnis placeat ea. Voluptatem ullam, dolor a ratione, ea nostrum eveniet, molestias saepe rerum in nemo consectetur!', image: 'https://bikebrewers.com/wp-content/uploads/2015/07/cx500-cafe-racer-1-1024x683.jpg', postLikes: 5, userId: 4, tagId: 3, createdAt: new Date(), updatedAt: new Date() },
      { title: 'this is iittt', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore officiis voluptate ullam aspernatur omnis placeat ea. Voluptatem ullam, dolor a ratione, ea nostrum eveniet, molestias saepe rerum in nemo consectetur!', image: 'https://www.carlogos.org/review-images/fastest-motorcycles.jpg', postLikes: 6, userId: 1, tagId: 4, createdAt: new Date(), updatedAt: new Date() },
      { title: 'WHOOOOOOOOOO', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore officiis voluptate ullam aspernatur omnis placeat ea. Voluptatem ullam, dolor a ratione, ea nostrum eveniet, molestias saepe rerum in nemo consectetur!', image: 'https://i.pinimg.com/originals/cf/9f/52/cf9f52d5434f08c4183eb793ffd0d84c.jpg', postLikes: 7, userId: 6, tagId: 5, createdAt: new Date(), updatedAt: new Date() },
      { title: 'WHOOOOOOOOOO', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore officiis voluptate ullam aspernatur omnis placeat ea. Voluptatem ullam, dolor a ratione, ea nostrum eveniet, molestias saepe rerum in nemo consectetur!', image: 'https://cdn.motor1.com/images/mgl/10eKw/s3/mercedes-amg-one.jpg', postLikes: 7, userId: 7, tagId: 6, createdAt: new Date(), updatedAt: new Date() },
      { title: 'WHOOOOOOOOOO', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore officiis voluptate ullam aspernatur omnis placeat ea. Voluptatem ullam, dolor a ratione, ea nostrum eveniet, molestias saepe rerum in nemo consectetur!', image: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/88-worlds-fastest-production-cars-koenigsegg-jesko-absolut.jpg', postLikes: 7, userId: 7, tagId: 7, createdAt: new Date(), updatedAt: new Date() },
      { title: 'WHOOOOOOOOOO', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore officiis voluptate ullam aspernatur omnis placeat ea. Voluptatem ullam, dolor a ratione, ea nostrum eveniet, molestias saepe rerum in nemo consectetur!', image: 'https://lushlongboards.com/wp-content/uploads/2017/04/Pete-Almabtrieb-2014.jpg', postLikes: 7, userId: 8, tagId: 5, createdAt: new Date(), updatedAt: new Date() },
      { title: 'WHOOOOOOOOOO', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore officiis voluptate ullam aspernatur omnis placeat ea. Voluptatem ullam, dolor a ratione, ea nostrum eveniet, molestias saepe rerum in nemo consectetur!', image: 'https://bikesreviewed.com/wp-content/uploads/2017/06/fast-bike.jpg', postLikes: 7, userId: 9, tagId: 3, createdAt: new Date(), updatedAt: new Date() },
      { title: 'WHOOOOOOOOOO', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore officiis voluptate ullam aspernatur omnis placeat ea. Voluptatem ullam, dolor a ratione, ea nostrum eveniet, molestias saepe rerum in nemo consectetur!', image: 'https://cars.usnews.com/images/article/201604/125521/000Car15Challenger670_640x420.jpg', postLikes: 7, userId: 10, tagId: 2, createdAt: new Date(), updatedAt: new Date() },
      { title: 'WHOOOOOOOOOO', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore officiis voluptate ullam aspernatur omnis placeat ea. Voluptatem ullam, dolor a ratione, ea nostrum eveniet, molestias saepe rerum in nemo consectetur!', image: 'https://cdn.hiconsumption.com/wp-content/uploads/2020/02/20-Fastest-Cars-FB.jpg', postLikes: 7, userId: 3, tagId: 1, createdAt: new Date(), updatedAt: new Date() },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Posts', null, {});
  }
};
