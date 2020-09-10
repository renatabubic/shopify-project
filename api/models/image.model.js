module.exports = (sequelize, Sequelize) => {
  const Image = sequelize.define("image", {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    tags: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    price: {
      type: Sequelize.Sequelize.DECIMAL(16, 2),
      defaultValue: 50,
    },
    urlImage: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    quantity: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
    selected: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    public: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  });

  return Image;
};
