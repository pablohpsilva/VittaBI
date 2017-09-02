import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';

import fetchData from '../../utils/request'

import Chart from '../../components/CardChart'
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
          title: 'Pessoas infectadas comgripe',
          subtitle: 'Por mês em 2017',
          dataKeyX: 'pessoas infectadas',
          dataKeyY: '',
          type: 'area',
        },
        {
          url: `${baseURL}/children-protected-against-poliomielite`,
          className: 'Chart-card-wrapper',
          name: 'region',
          title: 'Crianças protegidas contra a poliomielite',
          subtitle: 'Por regiao em 2017',
          dataKeyX: 'meninos',
          dataKeyY: 'meninas',
          type: 'area',
        },
        {
          url: `${baseURL}/people-protected-against-flu`,
          className: 'Chart-card-wrapper',
          name: 'state',
          title: 'Pessoas protegidas contra a gripe',
          subtitle: 'Por estado em 2017',
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
      fetchData(url)
        .then(data => {
          const charts = Object.assign([], this.state.charts)
          charts.push(this.createChartComponent(index, name, title, subtitle, dataKeyX, dataKeyY, data, type))
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

  createChartComponent = (key, name, title, subtitle, dataKeyX, dataKeyY, data, type, className = 'Chart-card-wrapper') => {
    if (!data || !data.length) {
      return null
    }
    return (
      <Chart
        className={className}
        key={key}
        name={name}
        title={title}
        subtitle={subtitle}
        dataKeyX={dataKeyX}
        dataKeyY={dataKeyY}
        data={data}
        type={type}
      />
    )
  }

  render() {
    return (
      <div className="App">
        <Navbar
          onToggle={this.toggleMenuVisibility}
        />
        <div className="App-content">
          {this.state.charts}
        </div>
      </div>
    )
  }
}
