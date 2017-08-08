import React, { Component } from "react";
import style from "./style";

class CommentList extends Component {
  render() {
    return (
      <div style={style.commentList}>
        {this.props.children}
      </div>
    );
  }
}

export default CommentList;
