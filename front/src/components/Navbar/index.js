import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import logo from './logo.svg';
import './style.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo" />
        <h2>
          {this.props.title}
        </h2>
        <div className="Navbar-wrapper">
          <Button
            basic
            color="teal"
            icon>
            <Icon name='world' />
          </Button>
        </div>
      </div>
    )
  }
}
