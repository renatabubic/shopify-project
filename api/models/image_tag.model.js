module.exports = (sequelize, Sequelize) => {
  const Image_Tag = sequelize.define("Image_Tag", {
    selfGranted: Sequelize.BOOLEAN,
  });

  return Image_Tag;
};
