import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import ImageTile from "./image.tile";

const apiUrl = "http://localhost:8080/api/images/";

class App extends Component {
  constructor() {
    super();
    this.state = { images: [], toSearch: "", searchBy: "all" };
    this.getData = this.getData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    this.getData("");
  }
  async getData(param) {
    const { data } = await axios.get(apiUrl + param);
    this.setState({ images: data });
  }
  handleChange(e) {
    //this.setState() won't update state when e.target.value = tag?!?!
    if (e.target.type !== "text") this.state.searchBy = e.target.value;
    else this.setState({ toSearch: e.target.value });
  }
  handleSubmit() {
    if (this.state.searchBy === "all") this.getData("");
    else {
      const queryType = this.state.searchBy === "title" ? "Title" : "Tag";
      const query = `/searchBy${queryType}?${queryType}=${this.state.toSearch}`;
      this.getData(query);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Image Repository </h1>
        <div>
          <label>
            {" "}
            Search:
            <select type="select" onChange={this.handleChange}>
              <option value="all">all</option>
              <option value="title">title</option>
              <option value="tag">tag</option>
            </select>
            <input
              type="text"
              placeholder={`type here`}
              onChange={this.handleChange}
            />
            <button type="submit" value="Submit" onClick={this.handleSubmit}>
              submit
            </button>
          </label>
        </div>
        <div className="add-delete-buttons">
          <button>Add images</button>
          <button
            onClick={async () => {
              const deleted = await axios.delete(apiUrl);
              if (!deleted) {
                alert("Please select images to delete");
              } else {
                this.getData("");
              }
            }}
          >
            Delete image(s)
          </button>
        </div>
        <ul id="images">
          {this.state.images.length > 0 ? (
            this.state.images.map((image) => {
              return <ImageTile key={image.id} image={image} />;
            })
          ) : (
            <div className="no-images">
              <h4>Sorry, your search didn't yield any results</h4>
              <img
                src="https://hotemoji.com/images/dl/x/sad-emoji-by-twitter.png"
                alt=""
                height="250"
                width="230"
              ></img>
            </div>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
