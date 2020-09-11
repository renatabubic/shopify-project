const { green, red } = require("chalk");
const db = require("./models");
const Image = db.images;

const images = [
  {
    title: "shanghai",
    price: 265,
    tags: ["shanghai", "city", "skyline", "water"],
    path: "SHANGHAI-CHINA.jpg",
  },
  {
    title: "fall walk",
    price: 50,
    tags: ["fall", "forest", "tree", "nature"],
    path: "road-1072823__340.jpg",
  },
  {
    title: "coloful desert flowers",
    price: 50,
    tags: ["desert", "flowers", "color", "water"],
    path: "Colorful-Nature.jpg",
  },
  {
    title: "new york city",
    price: 500,
    tags: ["nyc", "city", "skyline"],
    path: "11-stunning-city-skylines-around-the-world.jpg",
  },
  {
    title: "vancouver skyline",
    price: 150,
    tags: ["water", "city", "water", "skyline"],
    path: "VANCOUVER-CANADA.jpg",
  },
  {
    title: "fall nature walk",
    price: 60,
    tags: ["fall", "forest", "tree", "nature"],
    path: "fall-1072821__340.jpg",
  },
  {
    title: "tree in field",
    price: 45,
    tags: ["summer", "field", "tree", "green", "nature"],
    path: "images.jpeg",
  },
  {
    title: "mountain lake",
    price: 50,
    tags: ["water", "mountain", "lake", "tree", "nature"],
    path: "nature-quotes-1557340276.jpg?",
  },
  {
    title: "bridge Lake",
    price: 150,
    tags: ["bridge", "water", "lake", "tree", "forest", "nature"],
    path: "nature-1024x682.jpeg",
  },

  {
    title: "new york city at night",
    tags: ["nyc", "city", "skyline"],
    price: 50,
    path: "new-york-at-night.jpeg",
  },
  {
    title: "singapore skyline",
    price: 250,
    tags: ["shanghai", "city", "skyline", "water"],
    path: "SINGAPORE.jpg",
  },
];

const seed = async () => {
  try {
    await db.sequelize.sync({ force: true });

    await Promise.all(
      images.map((image) => {
        return Image.create(image);
      })
    );
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;

if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.sequelize.close();
    })
    .catch((err) => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.sequelize.close();
    });
}
