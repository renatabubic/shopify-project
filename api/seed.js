const { green, red } = require("chalk");
const db = require("./models");
const Image = db.images;
const Tag = db.tags;

const images = [
  {
    title: "Fall walk",
    price: 50,
    urlImage:
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
    tags: [
      {
        name: "fall",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "nature",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "forest",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "tree",
        Image_Tag: {
          selfGranted: true,
        },
      },
    ],
  },
  {
    title: "Fall nature walk",
    price: 60,
    urlImage:
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/fall-1072821__340.jpg",
    tags: [
      {
        name: "fall",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "nature",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "forest",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "tree",
        Image_Tag: {
          selfGranted: true,
        },
      },
    ],
  },
  {
    title: "Tree in field",
    price: 45,
    urlImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTc-bQTiwSWkFegmAib4r-5-KTQoHOmfZdIcg&usqp=CAU",
    tags: [
      {
        name: "summer",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "nature",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "field",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "tree",
        Image_Tag: {
          selfGranted: true,
        },
      },
    ],
  },
  {
    title: "Mountain Lake",
    price: 50,
    urlImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*",
    tags: [
      {
        name: "mountain",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "lake",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "nature",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "tree",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "water",
        Image_Tag: {
          selfGranted: true,
        },
      },
    ],
  },
  {
    title: "Bridge Lake",
    price: 150,
    urlImage:
      "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg",
    tags: [
      {
        name: "bridge",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "lake",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "nature",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "river",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "water",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "forest",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "tree",
        Image_Tag: {
          selfGranted: true,
        },
      },
    ],
  },
  {
    title: "Coloful Desert Flowers",
    price: 50,
    urlImage:
      "https://inspiration.rehlat.com/wp-content/uploads/2019/01/Colorful-Nature.jpg",
    tags: [
      {
        name: "mountain",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "desert",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "nature",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "flowers",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "water",
        Image_Tag: {
          selfGranted: true,
        },
      },
    ],
  },
  {
    title: "New York City",
    price: 500,
    urlImage:
      "https://static.toiimg.com/thumb/msid-38487526,width-748,height-499,resizemode=4,imgsize-248462/.jpg",
    tags: [
      {
        name: "city",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "nyc",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "skyline",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "day",
        Image_Tag: {
          selfGranted: true,
        },
      },
    ],
  },
  {
    title: "New York City at Night",
    price: 50,
    urlImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRK4hr1xjqqVYh5RGDCRQIArUHgeVWGjAnfzw&usqp=CAU",
    tags: [
      {
        name: "city",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "nyc",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "skyline",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "night",
        Image_Tag: {
          selfGranted: true,
        },
      },
    ],
  },
  {
    title: "Shanghai",
    price: 265,
    urlImage:
      "https://i2.wp.com/theluxurytravelexpert.com/wp-content/uploads/2018/08/SHANGHAI-CHINA.jpg?fit=970%2C546&ssl=1",
    tags: [
      {
        name: "city",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "shanghai",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "skyline",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "asia",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "water",
        Image_Tag: {
          selfGranted: true,
        },
      },
    ],
  },
  {
    title: "Singapore Skyline",
    price: 250,
    urlImage:
      "https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2018/08/SINGAPORE.jpg?ssl=1",
    tags: [
      {
        name: "city",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "singapore",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "skyline",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "asia",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "water",
        Image_Tag: {
          selfGranted: true,
        },
      },
    ],
  },
  {
    title: "Vancouver Skyline",
    price: 150,
    urlImage:
      "https://i2.wp.com/theluxurytravelexpert.com/wp-content/uploads/2018/08/VANCOUVER-CANADA.jpg?w=970&ssl=1",
    tags: [
      {
        name: "city",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "vancouver",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "skyline",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "canada",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "water",
        Image_Tag: {
          selfGranted: true,
        },
      },
      {
        name: "mountain",
        Image_Tag: {
          selfGranted: true,
        },
      },
    ],
  },
];

const tags = [
  {
    name: "water",
  },
  {
    name: "city",
  },
  {
    name: "nature",
  },
  {
    name: "tree",
  },
  {
    name: "skyline",
  },
  {
    name: "fall",
  },
  {
    name: "summer",
  },
  {
    name: "lake",
  },
  {
    name: "mountain",
  },
  {
    name: "river",
  },
  {
    name: "forest",
  },
];

const seed = async () => {
  try {
    await db.sequelize.sync({ force: true });

    await Promise.all(
      images.map((image) => {
        return Image.create(image, {
          include: Tag,
        });
      })
    );
    // await Promise.all(
    //   tags.map((tag) => {
    //     return Tag.create(tag);
    //   })
    // );
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
