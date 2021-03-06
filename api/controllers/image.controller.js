const db = require("../models");
const Image = db.images;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const fs = require("fs");
const { fileURLToPath } = require("url");

// Create and Save a new Image
exports.create = async (req, res) => {
  try {
    //check if there are multiple images to create
    if (Array.isArray(req.body.title)) {
      let toUpload = [];
      for (let i = 0; i < req.body.title.length; i++) {
        toUpload[i] = {
          title: req.body.title[i],
          tags: req.body.tags[i].split(","),
          path: req.files[i].filename,
          blob: req.files[0],
        };
      }
      const images = await Image.bulkCreate(toUpload, { returning: true });
      if (images) {
        console.log("BULK LOAD COMPLETE");
        res.json(images);
      } else {
        res.send("Unable to upload images");
      }
      //One image to create
    } else {
      const data = {
        title: req.body.title,
        tags: req.body.tags.split(","),
        path: req.files[0].filename,
        blob: req.files[0],
      };
      const image = await Image.create(data);
      if (image) {
        console.log("image upload successful");
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
exports.findAll = async (req, res) => {
  try {
    const images = await Image.findAll();
    if (images) {
      res.json(images);
    } else {
      res.send("Problem finding images");
    }
  } catch (err) {
    res.status(500).send("Some error occurred while retrieving images.");
  }
};

//Retrive by image tag
exports.findByTag = async (req, res) => {
  try {
    const tag = req.query.Tag;
    const images = await Image.findAll({
      where: { tags: { [Op.contains]: [tag] } },
    });
    if (images) {
      res.json(images);
    } else {
      res.send("cannot find any images with tag: " + tag);
    }
  } catch (error) {
    res
      .status(500)
      .send(
        "Something went wrong when attempting to retrieve images by tag name"
      );
  }
};

//Retrive by image keyword in title
exports.findByTitle = async (req, res) => {
  try {
    const title = req.query.Title;
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

// Find a single image with an id
exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const image = await Image.findByPk(id);

    if (image) {
      res.json(image);
    } else {
      res.send("Unable to find image with id: " + id);
    }
  } catch (error) {
    res.send(500).send("Error retrieving Image");
  }
};

// Update a Image by the id in the request
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const image = await Image.update(req.body, {
      where: { id: id },
    });
    if (image) {
      res.send("image was updated successfully");
    } else {
      res.send(
        `Cannot update Image with id=${id}. Maybe Image was not found or req.body is empty!`
      );
    }
  } catch (error) {
    res.send(500).send("Error updating Image with id=" + id);
  }
};

// Delete an image with the specified id
exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    const num = await Image.destroy({
      where: { id: id },
    });
    if (num == 1) {
      res.send({
        message: "Image was deleted successfully!",
      });
    } else {
      res.send({
        message: `Cannot delete Image with id=${id}. Maybe Image was not found!`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Could not delete Image with id=" + id,
    });
  }
};

//Delete multiple Images
exports.deleteSelected = async (req, res) => {
  try {
    const nums = await Image.destroy({ where: { selected: true } });
    if (nums) {
      res.send({ message: `${nums} image(s) deleted` });
    } else {
      res.sendStatus(500);
    }
  } catch (error) {
    res
      .status(500)
      .send("Something went wrong when attempting to delete selecte images");
  }
};

//removed delete all images route... must select 'all' to delete all from db
