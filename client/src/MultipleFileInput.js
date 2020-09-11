import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import apiUrl from "./apiUrl";
import Popup from "reactjs-popup";

class MultipleFileInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      title: "",
      tags: [],
      beginUpload: false,
      progress: 0,
      setProgess: 0,
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onChangeHandler(event) {
    this.setState({ selectedFile: event.target.files, beginUpload: true });
    console.log(this.state.selectedFile);
  }
  async onClickHandler() {
    try {
      let data = new FormData();
      // if there are multiple files to upload
      for (let i = 0; i < this.state.selectedFile.length; i++) {
        data.append("file", this.state.selectedFile[i]);
        data.append("title", this.state.title);
        data.append("tags", this.state.tags);
      }
      const images = await axios.post(apiUrl, data);
      if (images) {
        toast.success("upload success");
      }
    } catch (err) {
      toast.error("upload fail");
    }
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <div>
              <label>Upload Images </label>
              <input
                type="file"
                accept=".jpeg, .jpg, .png"
                multiple
                onChange={this.onChangeHandler}
              />
            </div>
            <div></div>
            {this.state.selectedFile ? (
              <Popup trigger={<button> Begin Upload</button>}>
                {(close) => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="header">
                      {" "}
                      Complete form for a successful upload{" "}
                    </div>
                    <div>
                      <label className="content-container">
                        <div className="content">
                          <input
                            type="text"
                            placeholder="title"
                            required={true}
                            onChange={(e) =>
                              this.setState({ title: e.target.value })
                            }
                          />
                          <input
                            type="text"
                            placeholder="tags"
                            required={true}
                            onChange={(e) => {
                              this.setState({
                                tags: e.target.value,
                              });
                            }}
                          />
                        </div>
                        separate tags by a comma, no spaces.
                        <br />
                        Ex: water,nature,blue
                      </label>
                      <ToastContainer />
                    </div>
                    <div>
                      <button
                        type="submit"
                        onClick={(e) => {
                          if (
                            this.state.title !== "" &&
                            this.state.tags.length > 0
                          ) {
                            this.onClickHandler();
                            close();
                          } else
                            toast.error(
                              "Please include a title and at least 1 tag to upload"
                            );
                        }}
                      >
                        Complete Upload
                      </button>
                    </div>
                  </div>
                )}
              </Popup>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default MultipleFileInput;
