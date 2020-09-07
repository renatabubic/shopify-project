module.exports = (sequelize, Sequelize) => {
  const Image = sequelize.define("image", {
    title: {
      type: Sequelize.STRING,
    },
    tag: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
    },
    price: {
      type: Sequelize.INTEGER,
    },
    urlImage: {
      type: Sequelize.TEXT,
      defaultValue:
        "https://meylah.com/uploads/5626/images/copy6-1337034800-b-day-party-olive-martini.png?1545585529",
    },
    quantity: {
      type: Sequelize.INTEGER,
      defaultValue: 10,
    },
  });

  return Image;
};
