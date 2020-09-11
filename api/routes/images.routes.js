module.exports = (app) => {
  const images = require("../controllers/image.controller");
  const db = require("../models");
  const multer = require("multer");

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(
        null,
        process.cwd().slice(0, process.cwd().length - 4) +
          "/client/public/uploads"
      );
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  // create the multer instance that will be used to upload/save the file
  const upload = multer({ storage });

  const router = require("express").Router();

  // Create a new Image(s)
  router.post("/", upload.array("file"), images.create);

  // Retrieve all Images
  router.get("/", images.findAll);

  //Retrive by image tag
  router.get("/searchByTag", images.findByTag);

  //Retrieve by image title
  router.get("/searchByTitle", images.findByTitle);

  // Retrieve a single image with id
  router.get("/:id", images.findOne);

  // Update a Image with id
  router.put("/:id", images.update);

  // Delete a Image with id
  router.delete("/:id", images.delete);

  //Delete multiple images
  router.delete("/", images.deleteSelected);

  // Delete all Images with id
  // router.delete("/deleteAll", images.deleteAll);

  app.use("/api/images", router);
};
