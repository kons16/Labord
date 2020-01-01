import React, { Component } from 'react';
import Task from './Task';

class TaskList extends Component {
  render() {
    const tasks = [];
    for(let i = 0; i < this.props.tasks.length; i++){
      tasks.push(
        <Task
          key={i}
          index={i}
          id={this.props.tasks[i].id}
          name={this.props.tasks[i].name}
          title={this.props.tasks[i].title}
          content={this.props.tasks[i].content}
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
