import React, { Component } from 'react';
import { withRouter } from 'react-router';
import TaskList from './TaskList';

class Top extends Component {
  constructor(){
    super();
    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    const item = [{title: "title", name: "name"}];
    this.setState({
      tasks: item,
    })
  }

  render() {
    return (
      <div className="App">
        <TaskList
          tasks={this.state.tasks}
          id={this.state.id}
        />
      </div>
    );
  }
}

export default withRouter(Top);
