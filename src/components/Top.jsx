import React, { Component } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import TaskList from './TaskList';

class Top extends Component {
  constructor(){
    super();
    this.state = {
      tasks: []
    };
  }

  getData() {
    const axios_data = [];
    axios.post(process.env.REACT_APP_API_URL,
               {"method": "get_task"})
      .then(res => {
        const axios_data = res.data
        // console.log(axios_data);
        this.setState({
          tasks: axios_data
        })
      })
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="App">
        <div id="finish_animation"></div>
        <TaskList
          tasks={this.state.tasks}
          id={this.state.id}
        />
      </div>
    );
  }
}

export default withRouter(Top);
