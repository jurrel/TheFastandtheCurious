'use strict';
module.exports = (sequelize, DataTypes) => {
  const ManyTag = sequelize.define('ManyTag', {
    tagId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER
  }, {});
  ManyTag.associate = function(models) {
    // associations can be defined here
    ManyTag.belongsTo(models.Post, { foreignKey: 'postId' });
    ManyTag.belongsTo(models.Tag, { foreignKey: 'tagId' });
  };
  return ManyTag;
};
