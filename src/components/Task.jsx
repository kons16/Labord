import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Task extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div id="task-box">
        <div id="title">{this.props.title}</div>
        <div id="name">{this.props.name}</div>
      </div>
    );
  }
}

export default withRouter(Task);