import React from "react";

const ImageTile = (props) => {
  const image = props.image;
  return (
    <div className="image-tile">
      <p>{image.title}</p>
      <img src={image.urlImage} height={250} width={250} alt=""></img>
      <div className="image-ps">
        <p>${image.price}</p>
        <p>{image.quantity} available</p>
      </div>
      {/* <button>Add to cart</button> */}
    </div>
  );
};

export default ImageTile;
