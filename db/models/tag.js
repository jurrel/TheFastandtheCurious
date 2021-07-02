'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: DataTypes.STRING
  }, {});
  Tag.associate = function (models) {
    // associations can be defined here



    const columnMapping = {
      through: 'ManyTag',
      otherKey: 'postId',
      foreignKey: 'tagId'
    }

    Tag.belongsToMany(models.Post, columnMapping);
    // Tag.hasMany(models.ManyTypes, {foreignKey: 'tagId'})
    // Tag.hasMany(models.ManyTag, {
    //   as: 'posts',
    //   foreignKey: 'tagId'
    // });

  };
  return Tag;
};
