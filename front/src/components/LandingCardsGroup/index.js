import React from 'react'
import './style.css'
import {
  Button,
  Card,
  Divider,
  Image,
} from 'semantic-ui-react'

const TECH_ICON = require('./img/power-icon.png')
const COMM_ICON = require('./img/community-icon.png')
const PREV_ICON = require('./img/heart-icon.png')
const CARD_WIDTH = { width: "100%" }

const CardsGroup = () => (
  <div className="landing-container-cards">
    <Card.Group className="landing-container-card">
      <Card className="landing-card" style={CARD_WIDTH}>
        <Card.Content>
          <Image floated='left' size='mini' src={TECH_ICON} />
          <Card.Header>
            Tecnologia
          </Card.Header>
          <Card.Description>
            A tecnologia dá grandes poderes para auxiliar o mundo em uma transformação positiva.
          </Card.Description>
        </Card.Content>
      </Card>
      <Card className="landing-card" style={CARD_WIDTH}>
        <Card.Content>
          <Image floated='left' size='mini' src={COMM_ICON} />
          <Card.Header>
            Comunidade
          </Card.Header>
          <Card.Description>
            Ajudar a comunidade é uma tarefa que temos como base para o crescimento. Ao extender a mão nesse modelo obtemos novas ideias e aceleramos o desenvolvimento.
          </Card.Description>
        </Card.Content>
      </Card>
      <Card className="landing-card" style={CARD_WIDTH}>
        <Card.Content>
          <Image floated='left' size='mini' src={PREV_ICON} />
          <Card.Header>
            Prevenção
          </Card.Header>
          <Card.Description>
            Cuidar é uma tarefa difícil e que pertence à cada um de nós. Motivar a prevenção contribui para facilitar a forma de cuidar, assim
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
  </div>
)


export default CardsGroup
