import React, { Component } from 'react';
import Post from './Task';

class TaskList extends Component {
  render() {
    const tasks = [];
    for(let i = 0; i < this.props.tasks.length; i++){
      tasks.push(
        <Post
          key={i}
          index={i}
          name={this.props.tasks[i].name}
          title={this.props.tasks[i].title}
          context={this.props.tasks[i].context}
          limit={this.props.tasks[i].limit}
          finish_check={this.props.tasks[i].finish_check}
        />
      );
    }

    return (
      <ul>
        {tasks}
      </ul>
    );
  }
}

export default TaskList;
