import React from "react";
import axios from "axios";
const apiUrl = "http://localhost:8080/api/images/";
class ImageTile extends React.Component {
  constructor() {
    super();
    this.state = { selected: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.setState({ selected: this.props.image.selected });
  }
  handleSubmit(e) {
    const image = this.props.image;

    if (image.quantity > 1) {
      return;
    }
  }
  render() {
    const image = this.props.image;
    return (
      <div className="image-tile">
        <div className="image-header">
          <p>{image.title}</p>
          {this.state.selected ? (
            <img
              height={30}
              src="https://icon-library.com/images/green-check-mark-icon-png/green-check-mark-icon-png-13.jpg"
              alt=""
            />
          ) : null}
        </div>
        <img src={image.urlImage} height={250} width={250} alt=""></img>
        <div className="image-ps">
          <p>${image.price}</p>
          <p>{image.quantity} available</p>
        </div>
        {!this.state.selected ? (
          <button
            onClick={async () => {
              await axios.put(apiUrl + image.id, { selected: true });
              this.setState({ selected: true });
            }}
          >
            Select
          </button>
        ) : (
          <button
            onClick={async () => {
              await axios.put(apiUrl + image.id, { selected: false });
              this.setState({ selected: false });
            }}
          >
            Unselect
          </button>
        )}
      </div>
    );
  }
}

export default ImageTile;
