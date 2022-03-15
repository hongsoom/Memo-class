import React, { Component } from "react";
import "./AddMemo.scss";
import TextField from "@mui/material/TextField";

class AddMemo extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: "",
    };
  }

  // 이벤트 객체 event의 targeet은 이벤트가 발생한 DOM인 input DOM을 가르키고 이 DOM의 value 값
  // 즉, event.target.value를 조회하면 현재 input에 입력한 값을 알 수 있음.
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

  /* componentDidUpdate() {
    console.log("title", this.state.title);
    console.log("content", this.state.content);
  }*/

  render() {
    const { onClick, title, saveMemo } = this.props; // 부모컴포넌트에서 props로 받음(함수 및 데이터)
    return (
      <div className="Memo">
        <div className="MemoBackground" />
        <div className="MemoContent">
          {/** Title of Dialog */}
          <div className="MemoTitle">
            <div className="Title-info">{title}</div>
          </div>
          <div className="MemoInfo">
            <input
              id="title"
              type="text"
              placeholder="Title"
              onChange={this.handleInputTitle}
            ></input>
            <textarea
              className="content"
              type="text"
              name="content"
              placeholder="content"
              onChange={this.handleInputContent}
            />
          </div>
          {/** buttons on foot */}
          <div className="MemoFoot">
            <button
              className="button1"
              type="button"
              onClick={() => {
                saveMemo(this.state.title, this.state.content);
                {
                  onClick();
                }
              }}
            >
              Save
            </button>
            <button type="button" className="button2" onClick={onClick}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddMemo;
