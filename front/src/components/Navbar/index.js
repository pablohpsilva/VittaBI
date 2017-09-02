import React, { Component } from 'react'
import { Button, Image, Segment } from 'semantic-ui-react'
import {
  Link,
} from 'react-router-dom'
import './style.css';


const LOGO_VITTA = require('./img/logo-vitta.png')

export default class Navbar extends Component {
  render() {
    return (
      <div
        className="App-header"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image
          src={LOGO_VITTA}
          style={{
            height: 70,
            width: 60,
          }}
          size="tiny"
          alt="logo"
        />
        <Segment
          inverted
          style={{
            margin: 0,
            padding: 0,
            backgroundColor: 'transparent',
          }}>
          <Link to="/region">
            <Button
              active={this.props.regionGraph}
              basic
              inverted
              color='blue'
            >
              Região
            </Button>
          </Link>
          <Link to="/diaseases">
            <Button
              active={this.props.diasesesGraph}
              basic
              inverted
              color='blue'
            >
              Doenças
            </Button>
          </Link>
          <Link to="/app">
            <Button
              active={this.props.allGraphs}
              basic
              inverted
              color='blue'
            >
              Todos
            </Button>
          </Link>
        </Segment>
      </div>
    )
  }
}

Navbar.defaultProps = {
  allGraphs: false,
  diasesesGraph: false,
  regionGraph: false,
}
