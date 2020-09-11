module.exports = (sequelize, Sequelize) => {
  const Image = sequelize.define("image", {
    //for rendering & search by title/keyword in title
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    //to search by characteristic and similar imgs
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
    //used for rending img from public folder
    path: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    //saving img as blob
    blob: {
      type: Sequelize.BLOB,
    },
    quantity: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
    //used for deleting instances in db
    selected: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  });

  return Image;
};
