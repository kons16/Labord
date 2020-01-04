import React, { Component } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class InputPost extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      name: "",
      limit: "",
      pass: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.createTask = this.createTask.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value
    });
  }

  /*
  * タスクをLambdaにPOSTする
  */
  createTask() {
    if(this.state.pass === process.env.REACT_APP_PASS){
      console.log(this.state.limit);
      axios.post(process.env.REACT_APP_API_URL,
                {"method": "insert",
                  "name": this.state.name,
                  "title": this.state.title,
                  "limit": this.state.limit,
                  "content": "content"
                })
        .then(res => {
          this.props.history.push('/');
        })
    }
  }

  render() {
    return (
      <div>
        <TextField
          id="standard-search"
          label="タイトル"
          name="title"
          type="search"
          autoComplete='off'
          onChange={this.handleChange}
          style={{ marginTop: 30, width: 450 }}
        /><br />
        <TextField
          id="standard-search"
          label="期限(ex: 2020,1,10)"
          name="limit"
          type="search"
          autoComplete='off'
          onChange={this.handleChange}
          style={{ marginTop: 30, width: 450 }}
        /><br />
        <TextField
          id="standard-search"
          label="投稿者名"
          name="name"
          type="search"
          autoComplete='off'
          onChange={this.handleChange}
          style={{ marginTop: 30, width: 450 }}
        /><br />
        <TextField
          id="standard-search"
          label="パスワード"
          name="pass"
          type="search"
          autoComplete='off'
          onChange={this.handleChange}
          style={{ marginTop: 30, width: 450 }}
        /><br />
        <Button variant="contained" color="primary"　style={{ marginTop: 30, width: 200 }}
          onClick={this.createTask} >
            タスクを作成
        </Button>
      </div>
    );
  }
}

export default withRouter(InputPost);
