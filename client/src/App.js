import React, { Component } from "react";
import "./App.css";
import axios from "axios";

const apiUrl = "http://localhost:8080/api/images/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [], searchBy: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  async componentDidMount() {
    const { data } = await axios.get(apiUrl);
    this.setState({ images: data });
  }
  handleChange(event) {
    this.state.searchBy = event.target.value;
  }

  render() {
    return (
      <div>
        <h1>Image Repository </h1>
        <div>
          <div className="nav-bar">
            <label htmlFor="search">
              Search images by
              <select value={this.state.searchBy} onChange={this.handleChange}>
                <option value="title">title</option>
                <option value="characteristics">characteristics</option>
              </select>
              <input type="text"></input>
              <input type="submit" value="Submit" />
            </label>
          </div>
        </div>
        <ul id="images">
          {this.state.images.map((image) => {
            return (
              <div key={image.id}>
                <div>
                  <p>{image.title}</p>
                </div>
                <img scr={image.urlImage} height={250} width={250} alt="" />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
