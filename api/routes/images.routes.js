module.exports = (app) => {
  const images = require("../controllers/image.controller");
  const db = require("../models");

  const router = require("express").Router();

  // Create a new Image(s)
  router.post("/", images.create);

  // Retrieve all Images
  router.get("/", images.findAll);

  //Retrive by image tag
  router.get("/searchByTag", images.findByTag);

  //Retrieve by image title
  router.get("/searchByTitle", images.findByTitle);

  // Retrieve a single Image with id
  router.get("/:id", images.findOne);

  // Update a Image with id
  router.put("/:id", images.update);

  // Delete a Image with id
  router.delete("/:id", images.delete);

  //Delete multiple images
  router.delete("/", images.deleteSelected);

  // Delete all Images with id
  router.delete("/deleteAll", images.deleteAll);

  app.use("/api/images", router);
};
