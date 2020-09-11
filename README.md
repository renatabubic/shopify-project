# Image repository

This project is for the Winter 2021 Intership Application (Backend Development) for Shopify

## About the app

Actually, there are two separate apps. The Client which serves the frontend (using React), and the API (in Node/Express/PostgreSQL).

Focusing on the server-side features of this project, this image repo web-app allows for the following functionality:

SEARCH image by:

- keyword in title/name
- tag/characteristic
- similar images

ADD image:

- single/bulk

DELETE image:

- single/bulk

With this, I also included a client-side so that the reader/user can see how it works fullstack.

\*\* disclaimer:

1. The client-side is VERY basic. Since the focus of this project is the server functionality, littler effort was made for the client-side to look 'pretty'.
2. At first, images were saved in the database under their https url. However, there were problems encountered when setting up the client-side using the input type-file element. This element yields a file uploaded from a local device, not a url path. Therefore, the db set-up was changed and the image is now stores as both a blob and as a file in the public folder with the filename saved in the url's place. The client then renders the image saved on in the public folder (not the blobl) using the original file name. It has been noted that this is not scalable. However, because I wanted to focus on search, and basic add & delete functionality, I figured it should do the trick!
3. The same title and tags will be given to multiple images uploaded at the same time.
   \*\*

## Run the repository

### Run the API

Navigate to the `api` directory
`npm install` to install all dependencies

`npm start` to start the app

### Run the CLIENT

Navigate to the `client` directory
`npm install` to install all dependencies

`npm start` to start the app

### Check if they are conneced

With both apps running, open browser to http://localhost:3000/
You should be able to see images!

### Need to re-seed the database?

Run `npm run seed` in the cli
