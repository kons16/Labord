import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  handleToInputTask = () => {
    this.props.history.push('/InputPost');
  }
  
  render() {
    return (
      <AppBar position="static" style={{background: '#202020'}}>
        <Toolbar>
            <Typography variant="h6" color="inherit"
              style={{ textDecoration: 'none', flexGrow: 1, marginLeft: 200}}
              component={Link} to="/">
              Labord
            </Typography>
            <div>
              <Button color='inherit' variant='outlined' style={{ marginRight: 30 }} onClick={this.handleToInputTask}>
                タスクを作成
              </Button>
            </div>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withRouter(Nav);
