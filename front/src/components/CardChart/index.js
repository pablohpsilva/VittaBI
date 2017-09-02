import React, { Component } from 'react'
import { Card, Container } from 'semantic-ui-react'
import Chart from '../Chart'
import CardChartHeader from '../CardChartHeader'

import './style.css'

export default class CardChart extends Component {
  constructor() {
    super()
    this.state = {
      chartOptionList: [
        { text: 'LineChart', value: 'LineChart' },
        { text: 'AreaChart', value: 'AreaChart' },
        { text: 'BarChart', value: 'BarChart' },
        // { text: 'PieChart', value: 'PieChart' },
        // { text: 'RadarChart', value: 'RadarChart' },
        // { text: 'RadialBarChart', value: 'RadialBarChart' },
        { text: 'ScatterChart', value: 'ScatterChart' },
        // { text: 'Treemap', value: 'Treemap' },
      ],
      type: 'line',
      xaxisList: [],
      yaxisList: [],
      xaxis: 'uv',
      yaxis: 'pv',
    }
    this.handleChangeChart = this.handleChangeChart.bind(this)
  }

  handleChangeChart({ value }) {
    const type = value.toLowerCase().replace('chart', '')
    this.setState({ type })
  }

  mapList(list, exclude) {
    if (list && list.length && exclude) {
      const element = list[0]
      return Object.keys(element)
        .filter(el => el !== exclude)
        .reduce((acc, curr) => {
          acc.push({ text: curr, value: curr })
          return acc
        }, [])
    }
    return []
  }

  getWrapperType(wrapper = 'card') {
    return wrapper.toLowerCase() === 'card'
      ? Card
      : Container
  }

  componentDidMount() {
    const type = this.props.type || 'line'
    this.setState({ type })
    this.setState({ xaxisList: this.mapList(this.props.data, this.state.yaxis) })
    this.setState({ yaxisList: this.mapList(this.props.data, this.state.xaxis) })
  }

  getChartWidth() {
    return window.innerWidth < 450
      ? window.innerWidth - 8
      : (this.props.width || 650) - 16
  }

  render() {
    const Wrapper = this.getWrapperType(this.props.wrapper)
    return (
      <Wrapper
        className={"card-wrapper App-card " + this.props.className}
        style={{
          width: this.props.width || 700
        }}>
        <Card.Content>
          <div className="card-content-wrapper">
            <Card.Header>
              {this.props.title || 'Title'}
            </Card.Header>
            <Card.Meta>
              {this.props.subtitle || 'Subtitle'}
            </Card.Meta>
          </div>

          <Card.Description>
            <CardChartHeader
              placeholderChart="Select Graph type"
              optionsChart={this.state.chartOptionList}
              onChangeChart={this.handleChangeChart}
            />
            <div
              className="card-graph-wrapper">
              <Chart
                type={this.state.type}
                data={this.props.data}
                dataKeyX={this.state.xaxis}
                dataKeyY={this.state.yaxis}
                width={this.getChartWidth()}
              />
            </div>
          </Card.Description>
        </Card.Content>
        {
          this.props.children &&
            <Card.Content extra>
              {this.props.children}
            </Card.Content>
        }
      </Wrapper>
    )
  }

}
