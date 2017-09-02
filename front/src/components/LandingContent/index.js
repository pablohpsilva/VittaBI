import React, { Component } from 'react'
import './style.css'
import CardsGroup from '../LandingCardsGroup'
import { Link } from 'react-router-dom'
import {
  Button,
  Image,
} from 'semantic-ui-react'

const FAMILY_IMG = require('./img/landing-img.png')

class Content extends Component {

  constructor(props) {
    super(props)

    this.state = {
      windowWidth: 0,
    }
  }

  componentDidMount() {
    window.onresize = () => {
      this.setState({ windowWidth: window.innerWidth })
    }
  }

  render() {
    return (
      <div
        className="landing-container"
      >
        <Image
          hidden={this.state.windowWidth > 648}
          className="landing-image"
          floated='left'
          size='big'
          src={FAMILY_IMG}
        />
        <CardsGroup />
        <Link to="/app">
          <Button
            basic
            className="landing-header-button-enter"
            size="massive"
            color='blue'
          >
            Conheça a plataforma
        </Button>
        </Link>
      </div>
    )
  }
}

export default Content
