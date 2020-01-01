import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router';
import axios from 'axios';

class Task extends Component {
  constructor(props){
    super(props);
    this.state = {
      diffDay: ""
    }
  }

  /*
  * タスクを完了済みに変更する
  */
  toFinish(id) {
    /*
    axios.post(process.env.REACT_APP_API_URL,
               {"method": "change", "id": String(id)})
      .then(res => {
        window.location.reload();
      })
    */
    // 完了アニメーション
    const element =  document.querySelector('#finish_animation');
    element.innerHTML = "タスク完了！";
    element.classList.add('animated', 'fadeInUp');
    element.addEventListener('animationend', function() {
      element.classList.remove('animated', 'fadeInUp');
      element.innerHTML = "";
    });
  }

  /*
  * DBから取得した時刻と、現在時刻の日差分をとる
  */
  calcLimit() {
    const splitedLimit = this.props.limit.split(/年|月|日/g);
    // splitedLimit : ["2020", "1", "10", ""]
    const reshapeLimit = splitedLimit[0] + "/" + splitedLimit[1] + "/"
                          + splitedLimit[2] + " " + "24" + ":" + "00" + ":" + "00";
    const limit = new Date(reshapeLimit);
    const now = new Date();
    const diffDay = Math.floor((limit - now) / (1000 * 60 * 60 * 24));
    this.setState({
      diffDay: diffDay
    })
  }

  componentDidMount() {
    this.calcLimit();
  }

  render() {
    return (
        <div id="task-box">
          <div id="title">{this.props.title}</div>
          <div id="name">投稿者: {this.props.name}</div>
          <div id="limit">{this.props.limit} 〆</div>
          <div id="buttom_block">
            残り<div id="remaining">{this.state.diffDay}</div>日
            <Button variant="contained" color="primary" style={{ marginLeft: 70 }}
              onClick={this.toFinish.bind(this, this.props.id)}>
              完了
            </Button>
          </div>
        </div>
    );
  }
}

export default withRouter(Task);