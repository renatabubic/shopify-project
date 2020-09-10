import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import apiUrl from "./secrets";
import Popup from "reactjs-popup";

class MultipleFileInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      title: "",
      tags: [],
      beginUpload: false,
      hasUploaded: false,
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onChangeHandler(event) {
    const files = event.target.files;
    this.setState({
      selectedFile: files,
    });
  }
  async onClickHandler() {
    try {
      const title = this.state.title;
      const tags = this.state.tags;
      const urlImage = this.state.selectedFile[0].name;

      const images = await axios.post(apiUrl, { title, tags, urlImage });
      if (images) {
        toast.success("upload success");
        this.setState({ hasUploaded: true });
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
                        onChange={(e) =>
                          this.setState({
                            tags: [e.target.value],
                          })
                        }
                      />
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
