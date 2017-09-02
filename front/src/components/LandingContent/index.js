import React from 'react'
import './style.css'
import CardsGroup from '../LandingCardsGroup'
import {
  Link,
} from 'react-router-dom'
import {
  Button,
  Divider,
  Image,
} from 'semantic-ui-react'

const FAMILY_IMG = require('./img/landing-img.png')

const Content = () => (
  <div
    className="landing-container"
  >
    <Image
      className="landing-image"
      floated='left'
      size='big'
      src={FAMILY_IMG}
    />
    <CardsGroup />
    <Link to="/application">
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


export default Content
