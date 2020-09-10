import React from "react";
import axios from "axios";
import apiUrl from "./secrets";
import { Link, Redirect } from "react-router-dom";

class Image extends React.Component {
  constructor() {
    super();
    this.state = { image: {}, deleted: false, images: [] };
    this.getData = this.getData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.waitForIdToChange = this.waitForIdToChange.bind(this);
  }
  async componentDidMount() {
    this.getData();
  }
  waitForIdToChange() {
    setTimeout(this.getData, 200);
  }
  async getData() {
    const { id } = this.props.match.params;
    console.log(id);
    const res = await axios.get(apiUrl + "/" + id);
    const image = res.data;
    let images = [];
    let ids = {};
    for (let tag of image.tags) {
      const response = await axios.get(apiUrl + "/searchByTag?Tag=" + tag);
      if (response) {
        for (let img of response.data) {
          if (img.id !== parseInt(id) && !ids[img.id]) {
            images.push(img);
            ids[img.id] = true;
          }
        }
      } else continue;
    }
    this.setState({ image: image, images: images });
  }

  async handleSubmit() {
    const res = await axios.delete(apiUrl + "/" + this.state.image.id);
    if (res.status === 200) {
      this.setState({ deleted: true });
    }
  }

  render() {
    const image = this.state.image;
    if (this.state.deleted) {
      return <Redirect to="/images" />;
    }
    return (
      <div>
        <div className="image-container">
          <div className="side-bar"></div>
          <Link to={"/images"}>Back to all images</Link>
          <div className="image-sm-container">
            <div className="image-header">
              <h1>Image Repository </h1>
              <p>Title: {image.title}</p>
            </div>
            <img
              src={process.env.PUBLIC_URL + "/uploads/" + image.urlImage}
              height={500}
              width={500}
              alt=""
            ></img>
            <div>
              <p>${image.price}</p>
              <p>{image.quantity} available</p>
            </div>
            <button onClick={this.handleSubmit}>Delete</button>
          </div>
          <div className="side-bar"></div>
        </div>
        <div className="similar-img-container">
          <div className="side-bar"></div>
          <div className="similar-img">
            <p className="sim-img-title">Similar Images</p>
            <ul className="similar-img-sm">
              {this.state.images.map((image) => {
                return (
                  <Link
                    key={image.id}
                    to={`/images/${image.id}`}
                    onClick={this.waitForIdToChange}
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL + "/uploads/" + image.urlImage
                      }
                      height={200}
                      width={200}
                      alt=""
                    />
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="side-bar"></div>
        </div>
      </div>
    );
  }
}

export default Image;
