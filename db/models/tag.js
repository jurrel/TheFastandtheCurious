'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: DataTypes.STRING
  }, {});
  Tag.associate = function (models) {
    // associations can be defined here

    // Tag.hasMany(models.Post, { foreignKey: 'postId' });

    // const columnMapping = {
    //   through: 'ManyTag',
    //   otherKey: 'postId',
    //   foreignKey: 'tagId'
    // }

    // Tag.belongsToMany(models.Post, columnMapping);

  };
  return Tag;
};
