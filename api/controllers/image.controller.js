const db = require("../models");
// const imageModel = require("../models/image.model");
const Image = db.images;
// const Tag = db.tags;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// Create and Save a new Image
exports.create = async (req, res) => {
  try {
    const resp = req.body;
    //check if there is multiple images to create
    if (Array.isArray(resp)) {
      const images = await Image.bulkCreate(resp, { returning: true });
      if (images) {
        res.json(images);
      } else {
        res.send("Unable to upload images");
      }
      //One image to create
    } else {
      const image = await Image.create(resp);
      if (image) {
        res.json(image);
      } else {
        res.status(500).send("Some error occurred while creating the image.");
      }
    }
  } catch (error) {
    res.status(500).send("Some error occurred while creating images.");
  }
};

// Retrieve all Images from the database.
exports.findAll = (req, res) => {
  Image.findAll({ where: { public: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving images.",
      });
    });
};

//Retrive by image tag
exports.findByTag = async (req, res) => {
  try {
    const tag = req.query.Tag;
    console.log(tag);
    const images = await Image.findAll({
      where: { tag: { [Op.contains]: [tag] } },
    });
    if (images) {
      res.json(images);
    } else {
      res.send("cannot find any images with tag: " + tag);
    }
  } catch (error) {
    res
      .sendStatus(500)
      .send(
        "Something went wrong when attempting to retrieve images by tagName"
      );
  }
};

//Retrive by image keyword in title
exports.findByTitle = async (req, res) => {
  try {
    const title = req.query.Title;
    console.log(title);
    const image = await Image.findAll({
      where: { title: { [Op.like]: `%${title}%` } },
    });
    if (image) {
      res.json(image);
    } else {
      res.sendStatus(404).send("There is no image with title: " + title);
    }
  } catch (error) {
    res.sendStatus(500).send("Error trying to find a title", error);
  }
};

// Find a single Image with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Image.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Image with id=" + id,
      });
    });
};

// Update a Image by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Image.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Image was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Image with id=${id}. Maybe Image was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Image with id=" + id,
      });
    });
};

// Delete a Image with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Image.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Image was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Image with id=${id}. Maybe Image was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Image with id=" + id,
      });
    });
};

exports.deleteSelected = async (req, res) => {
  try {
    await Image.destroy({ where: { selected: true } });
    const images = await Image.findAll();
    res.json(images);
  } catch (error) {
    res
      .status(500)
      .send("Something went wrong when attempting to delete selecte images");
  }
};

// Delete all Images from the database.
exports.deleteAll = (req, res) => {
  Image.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Images were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all images.",
      });
    });
};

// exports.findSome = async (req, res) => {
//   try {
//     const tag = req.query.Tag;

//     const images = await Image.findAll({
//       include: [{ model: Tag, where: { name: tag } }],
//     });
//     if (images) {
//       res.json(images);
//     } else {
//       res.sendStatus(404).send("Unable to retrieve images with:" + tag);
//     }
//   } catch (error) {
//     res.send(error);
//   }
// };
