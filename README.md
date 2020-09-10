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

1. Client-side is VERY basic. It is simply meant to showcase the backend functionality in a web-app. SO NO JUDGING ALLOWED XD
2. The database is set up to house image URLs, not image blobs. Therefore, when uploaded an image saved from a desktop, the new image will not be saved directly as a blob in the db, but rather as a file directory reference to the image. It has been noted that this is not scalable. However, for the purpose of this excercise, it should do the trick!
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
