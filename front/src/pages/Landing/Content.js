import React from 'react'
import './style.css'
import CardsGroup from './CardsGroup'
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
    <Button
      basic
      className="landing-header-button-enter"
      size="massive"
      color='blue'
      onCLick={() => alert('hue')}
    >
      Conheça a plataforma
    </Button>
  </div>
)


export default Content
