import React from "react";
import axios from "axios";
import apiUrl from "./secrets";
import { Link } from "react-router-dom";

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
        <div className="image-header-tile">
          <p>{image.title}</p>
          {this.state.selected ? (
            <img
              height={30}
              src="https://icon-library.com/images/green-check-mark-icon-png/green-check-mark-icon-png-13.jpg"
              alt=""
            />
          ) : null}
        </div>
        <Link to={`/images/${image.id}`}>
          <img
            src={process.env.PUBLIC_URL + "/uploads/" + image.path}
            height={250}
            width={250}
            alt=""
            onClick={() => {}}
          />
        </Link>
        {!this.state.selected ? (
          <button
            onClick={async () => {
              await axios.put(apiUrl + "/" + image.id, { selected: true });
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
