import React, { Component } from 'react'
import { Card, Icon } from 'semantic-ui-react'
import Chart from '../Chart'

export default class CardChart extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>
            Mattew
          </Card.Header>
          <Card.Meta>
            Meta
          </Card.Meta>

          <Card.Description>
            <Chart
              data={this.props.data}
            />
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    )
  }

}
