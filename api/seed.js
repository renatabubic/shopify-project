const { green, red } = require("chalk");
const db = require("./models");
const Image = db.images;
const User = db.users;

const images = [
  {
    title: "fall walk",
    price: 50,
    tags: ["fall", "forest", "tree", "nature"],
    urlImage:
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
    // userId: 1,
  },
  {
    title: "fall nature walk",
    price: 60,
    tags: ["fall", "forest", "tree", "nature"],
    urlImage:
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/fall-1072821__340.jpg",
    // userId: 1,
  },
  {
    title: "tree in field",
    price: 45,
    tags: ["summer", "field", "tree", "green", "nature"],
    urlImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTc-bQTiwSWkFegmAib4r-5-KTQoHOmfZdIcg&usqp=CAU",
    // userId: 2,
  },
  {
    title: "mountain lake",
    price: 50,
    tags: ["water", "mountain", "lake", "tree", "nature"],
    urlImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*",
    // userId: 2,
  },
  {
    title: "bridge Lake",
    price: 150,
    tags: ["bridge", "water", "lake", "tree", "forest", "nature"],
    urlImage:
      "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg",
    // userId: 3,
  },
  {
    title: "coloful desert flowers",
    price: 50,
    tags: ["desert", "flowers", "color", "water"],
    urlImage:
      "https://inspiration.rehlat.com/wp-content/uploads/2019/01/Colorful-Nature.jpg",
    // userId: 3,
  },
  {
    title: "new york city",
    price: 500,
    tags: ["nyc", "city", "skyline"],
    urlImage:
      "https://static.toiimg.com/thumb/msid-38487526,width-748,height-499,resizemode=4,imgsize-248462/.jpg",
    // userId: 1,
  },
  {
    title: "new york city at night",
    tags: ["nyc", "city", "skyline"],
    price: 50,
    urlImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRK4hr1xjqqVYh5RGDCRQIArUHgeVWGjAnfzw&usqp=CAU",
    // userId: 1,
  },
  {
    title: "shanghai",
    price: 265,
    tags: ["shanghai", "city", "skyline", "water"],
    urlImage:
      "https://i2.wp.com/theluxurytravelexpert.com/wp-content/uploads/2018/08/SHANGHAI-CHINA.jpg?fit=970%2C546&ssl=1",
    // userId: 2,
  },
  {
    title: "singapore skyline",
    price: 250,
    tags: ["shanghai", "city", "skyline", "water"],
    urlImage:
      "https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2018/08/SINGAPORE.jpg?ssl=1",
    // userId: 2,
  },
  {
    title: "vancouver skyline",
    price: 150,
    tags: ["water", "city", "water", "skyline"],
    urlImage:
      "https://i2.wp.com/theluxurytravelexpert.com/wp-content/uploads/2018/08/VANCOUVER-CANADA.jpg?w=970&ssl=1",
    // userId: 3,
  },
];

const users = [
  {
    name: "Bob",
    email: "bob@bob.com",
  },
  {
    name: "barb",
    email: "barb@barb.com",
  },
  {
    name: "Jessica",
    email: "jessica@hotmail.com",
  },
];

const seed = async () => {
  try {
    await db.sequelize.sync({ force: true });
    // await Promise.all(
    //   users.map((user) => {
    //     return User.create(user);
    //   })
    // );
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
