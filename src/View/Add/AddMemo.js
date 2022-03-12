import React, { Component } from "react";
import "./AddMemo.scss";

class AddMemo extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: "",
    };
  }

  handleInputTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleInputContent = (event) => {
    this.setState({
      content: event.target.value,
    });
  };

  componentDidUpdate() {
    console.log("title", this.state.title);
  }

  render() {
    const { onClick, title, saveMemo } = this.props;
    return (
      <div className="Memo-AddDialog">
        <div className="AddDialog-Background" />
        <div className="AddDialog-Content">
          {/** Title of Dialog */}
          <div className="AddDialog-Title"> {title} </div>
          <div className="AddDialog-Info">
            <form className="input">
              <textarea
                claaName="title"
                type="text"
                name="title"
                onChange={this.handleInputTitle}
              />
              <textarea
                claaName="content"
                type="text"
                name="content"
                onChange={this.handleInputContent}
              />
            </form>
          </div>
          {/** buttons on foot */}
          <div className="AddDialog-Foot">
            <button
              className=""
              type="button"
              onClick={() => saveMemo(this.state.title, this.state.content)}
            >
              저장
            </button>
            <button variant="outlined" className="Foot-Info" onClick={onClick}>
              닫기
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default AddMemo;
