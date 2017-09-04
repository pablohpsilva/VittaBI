import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';

import { mockRequest } from '../../utils/request'
import createChartComponent from '../../utils/createChartComponent'

import Navbar from '../../components/Navbar'

export default class Application extends Component {
  constructor() {
    super()
    const baseURL = 'http://localhost:3001'
    this.state = {
      menuVisibility: false,
      chartsRaw: [
        {
          url: `${baseURL}/flu-per-month`,
          className: 'Chart-card-wrapper',
          name: 'mês',
          title: 'Pessoas infectadas com gripe',
          subtitle: 'Por mês em 2016',
          dataKeyX: 'pessoas infectadas',
          dataKeyY: '',
          type: 'area',
        },
        {
          url: `${baseURL}/children-protected-against-poliomielite`,
          className: 'Chart-card-wrapper',
          name: 'region',
          title: 'Crianças protegidas contra a poliomielite',
          subtitle: 'Por região em 2016',
          dataKeyX: 'meninos',
          dataKeyY: 'meninas',
          type: 'area',
        },
        {
          url: `${baseURL}/people-protected-against-flu`,
          className: 'Chart-card-wrapper',
          name: 'state',
          title: 'Pessoas protegidas contra a gripe',
          subtitle: 'Por estado em 2016',
          dataKeyX: 'número de pessoas',
          dataKeyY: '',
          type: 'area',
        },
      ],
      charts: [],
    }
  }

  toggleMenuVisibility = () => {
    this.setState({ menuVisibility: !this.state.menuVisibility })
    return null
  }

  requestCharts = (objs) => {
    return objs.map(({ url, name, title, subtitle, dataKeyX, dataKeyY, type, className }, index) => { // eslint-disable-line
      mockRequest(url)
        .then(data => {
          const charts = Object.assign([], this.state.charts)
          charts.push(createChartComponent(index, name, title, subtitle, dataKeyX, dataKeyY, data, type))
          this.setState({ charts })
        })
        .catch(err => {
          console.log(err)
        })
    })
  }

  componentDidMount() {
    this.requestCharts(this.state.chartsRaw)
  }

  render() {
    return (
      <div className="App">
        <Navbar
          onToggle={this.toggleMenuVisibility}
          diasesesGraph
        />
        <div className="App-content">
          {this.state.charts}
        </div>
      </div>
    )
  }
}
