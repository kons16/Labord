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
    console.log(process.env.REACT_APP_API_URL);
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
    console.log(process.env.NODE_ENV);
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
