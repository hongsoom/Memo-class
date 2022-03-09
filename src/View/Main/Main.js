import React, { Component } from "react";
import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div className="MainForm">
          <div className="MainTitle">Memo</div>
          <div className="List"></div>
          <div className="MainBottom">
            <a href="#" class="MainBottom">
              +
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Main;
