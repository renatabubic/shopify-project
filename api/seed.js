const { green, red } = require("chalk");
const db = require("./models");
const Image = db.images;

const images = [
  {
    title: "Fall walk",
    tag: ["fall", "nature", "forest", "tree"],
    price: 50,
    urlImage:
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
  },
  {
    title: "Fall nature walk",
    tag: ["fall", "nature", "forest", "tree"],
    price: 60,
    urlImage:
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/fall-1072821__340.jpg",
  },
  {
    title: "Tree in field",
    tag: ["summer", "nature", "field", "tree"],
    price: 45,
    urlImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTc-bQTiwSWkFegmAib4r-5-KTQoHOmfZdIcg&usqp=CAU",
  },
  {
    title: "Mountain Lake",
    tag: ["mountain", "lake", "nature", "tree", "water"],
    price: 50,
    urlImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*",
  },
  {
    title: "Bridge Lake",
    tag: ["bridge", "nature", "lake", "river", "water", "forest", "tree"],
    price: 150,
    urlImage:
      "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg",
  },
  {
    title: "Coloful Desert Flowers",
    tag: ["mountain", "desert", "nature", "flowers", "water"],
    price: 50,
    urlImage:
      "https://inspiration.rehlat.com/wp-content/uploads/2019/01/Colorful-Nature.jpg",
  },
  {
    title: "New York City",
    tag: ["city", "new york city", "nyc", "skyline", "day"],
    price: 500,
    urlImage:
      "https://static.toiimg.com/thumb/msid-38487526,width-748,height-499,resizemode=4,imgsize-248462/.jpg",
  },
  {
    title: "New York City at Night",
    tag: ["city", "new york city", "nyc", "skyline", "night"],
    price: 50,
    urlImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRK4hr1xjqqVYh5RGDCRQIArUHgeVWGjAnfzw&usqp=CAU",
  },
  {
    title: "Shanghai",
    tag: ["city", "shanghai", "skyline", "china", "water", "asia"],
    price: 265,
    urlImage:
      "https://i2.wp.com/theluxurytravelexpert.com/wp-content/uploads/2018/08/SHANGHAI-CHINA.jpg?fit=970%2C546&ssl=1",
  },
  {
    title: "Singapore Skyline",
    tag: ["city", "singapore", "skyline", "asia", "water"],
    price: 250,
    urlImage:
      "https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2018/08/SINGAPORE.jpg?ssl=1",
  },
  {
    title: "Vancouver Skyline",
    tag: [
      "city",
      "vancouver",
      "skyline",
      "canada",
      "water",
      "canada",
      "mountain",
    ],
    price: 150,
    urlImage:
      "https://i2.wp.com/theluxurytravelexpert.com/wp-content/uploads/2018/08/VANCOUVER-CANADA.jpg?w=970&ssl=1",
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
