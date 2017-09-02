import React, { Component } from 'react'
import { Container, Select } from 'semantic-ui-react'
import './style.css'

export default class CardChartHeader extends Component {
  render() {
    return (
      <Container className="CardChartHeader-wrapper">
        <Select
          search
          selection
          onChange={(event, data) => { this.props.onChangeChart(data) }}
          value={this.props.value}
          placeholder={this.props.placeholderChart}
          options={this.props.optionsChart}
        />
      </Container>
    )
  }
}
