'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    postLikes: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Post.associate = function (models) {
    // associations can be defined here
    Post.belongsTo(models.User, {
      foreignKey: 'userId'
    });
// <<<<<<< uptodatebranch-messingwithtags

//     const columnMapping = {
//       through: 'ManyTag',
//       otherKey: 'tagId',
//       foreignKey: 'postId'
//     }
// =======
    Post.hasMany(models.Comment, { foreignKey: 'postId' });
    // const columnMapping = {
    //   through: 'ManyTag',
    //   otherKey: 'tagId',
    //   foreignKey: 'postId'
    // }
// >>>>>>> new-branch

//     Post.belongsToMany(models.Tag, columnMapping);

      // Post.hasMany(models.ManyTag, {
      //   as: 'tags',
      //   foreignKey: 'postId'
      // });
  };
  return Post;
};
