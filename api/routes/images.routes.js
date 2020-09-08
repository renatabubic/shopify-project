module.exports = (app) => {
  const images = require("../controllers/image.controller");
  const db = require("../models");
  const Image = db.images;
  const Tag = db.tags;
  const router = require("express").Router();

  // Create a new Image
  router.post("/", images.create);

  // Retrieve all Images
  router.get("/searchBy", async (req, res) => {
    try {
      const tag = req.query.tag;
      const images = await Image.findAll({
        include: [{ model: Tag, where: { name: tag } }],
      });
      if (images) {
        res.json(images);
      } else {
        res.sendStatus(404).send("Unable to retrieve images with:" + tag);
      }
    } catch (error) {
      res.send(error);
    }
  });
  router.get("/", images.findAll);

  // Retrieve a single Image with id
  router.get("/:id", images.findOne);

  // Update a Image with id
  router.put("/:id", images.update);

  // Delete a Image with id
  router.delete("/:id", images.delete);

  // Delete all Images with id
  router.delete("/", images.deleteAll);

  app.use("/api/images", router);
};
