const { green, red } = require("chalk");
const db = require("./models");
const Image = db.images;

const images = [
  {
    title: "fall walk",
    price: 50,
    tags: ["fall", "forest", "tree", "nature"],
    urlImage: "road-1072823__340.jpg",
  },
  {
    title: "fall nature walk",
    price: 60,
    tags: ["fall", "forest", "tree", "nature"],
    urlImage: "fall-1072821__340.jpg",
  },
  {
    title: "tree in field",
    price: 45,
    tags: ["summer", "field", "tree", "green", "nature"],
    urlImage: "images.jpeg",
  },
  {
    title: "mountain lake",
    price: 50,
    tags: ["water", "mountain", "lake", "tree", "nature"],
    urlImage: "nature-quotes-1557340276.jpg?",
  },
  {
    title: "bridge Lake",
    price: 150,
    tags: ["bridge", "water", "lake", "tree", "forest", "nature"],
    urlImage: "nature-1024x682.jpeg",
  },
  {
    title: "coloful desert flowers",
    price: 50,
    tags: ["desert", "flowers", "color", "water"],
    urlImage: "Colorful-Nature.jpg",
  },
  {
    title: "new york city",
    price: 500,
    tags: ["nyc", "city", "skyline"],
    urlImage: "11-stunning-city-skylines-around-the-world.jpg",
  },
  {
    title: "new york city at night",
    tags: ["nyc", "city", "skyline"],
    price: 50,
    urlImage: "new-york-at-night.jpeg",
  },
  {
    title: "shanghai",
    price: 265,
    tags: ["shanghai", "city", "skyline", "water"],
    urlImage: "SHANGHAI-CHINA.jpg",
  },
  {
    title: "singapore skyline",
    price: 250,
    tags: ["shanghai", "city", "skyline", "water"],
    urlImage: "SINGAPORE.jpg",
  },
  {
    title: "vancouver skyline",
    price: 150,
    tags: ["water", "city", "water", "skyline"],
    urlImage: "VANCOUVER-CANADA.jpg",
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
