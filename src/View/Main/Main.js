import React, { Component } from "react";
import AddMemo from "../Add/AddMemo";
import "./Main.scss";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
      title: "",
      content: "",
    };
  }

  // 버튼 클릭시 state 변경
  onClick = () => {
    this.setState({
      isClicked: !this.state.isClicked,
    });
  };

  // 자식컴포넌트에서 props로 데이터 받기
  saveMemo = (childTitle, childContent) => {
    this.setState({
      title: childTitle,
      content: childContent,
    });
  };

  /* componentDidUpdate() {
    console.log("isClicked", this.state.isClicked);
    console.log("content", this.state.content);
  }*/

  render() {
    return (
      <>
        {/**operator : true이면 AddMemo 컴포넌트를 띄우고 props로 onClick,title,saveMemo를 자식컴포넌트에 보냄
         * onClick props는 onClick함수, title Props는 데이터, saveMemo props는 saveMemo함수**/}
        {this.state.isClicked ? (
          <AddMemo
            onClick={this.onClick}
            title="Memo"
            saveMemo={this.saveMemo}
          />
        ) : null}
        <div className="Main">
          <div className="MainForm">
            <div className="MainTitle">Memo</div>
            <div className="List">
              <p>{this.state.title}</p>
              <span>{this.state.content}</span>
            </div>
            <div className="MainBottom">
              <button type="button" className="AddBtn" onClick={this.onClick}>
                Add
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Main;
