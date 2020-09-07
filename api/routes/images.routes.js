module.exports = (app) => {
  // const images = require("../controllers/image.controller");
  const images = require("../controllers/image.controller");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", images.create);

  // Retrieve all Tutorials
  router.get("/", images.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", images.findOne);

  // Update a Tutorial with id
  router.put("/:id", images.update);

  // Delete a Tutorial with id
  router.delete("/:id", images.delete);

  // Create a new Tutorial
  // router.delete("/", images.deleteAll);

  app.use("/api/images", router);
};
