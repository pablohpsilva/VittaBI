import React, { Component } from 'react'
import { Button, Image, Segment } from 'semantic-ui-react'
import {
  Link,
} from 'react-router-dom'
import './style.css';


const LOGO_VITTA = require('./img/logo-vitta.png')

export default class Navbar extends Component {
  constructor(props)  {
    super(props)

    this.state = {
      allGraphs: true,
      regionGraph: false,
      diasesesGraph: false,
    }
  }
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
          }}>
          <Link to="/region">
            <Button
              active={this.state.regionGraph}
              basic
              inverted
              color='blue'
            >
              Região
            </Button>
          </Link>
          <Link to="/diaseases">
            <Button
              active={this.state.diasesesGraph}
              basic
              inverted
              color='blue'
            >
              Doenças
            </Button>
          </Link>
          <Link to="/app">
            <Button
              active={this.state.allGraphs}
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
