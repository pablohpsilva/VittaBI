import React, { Component } from 'react';
import './style.css';
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
          url: `${baseURL}/seek-people-per-state`,
          className: 'Chart-card-wrapper',
          name: 'state',
          title: 'Pessoas doentes',
          subtitle: 'Por estado em 2017',
          dataKeyX: 'número de pessoas',
          dataKeyY: '',
          type: 'area',
        },
        {
          url: `${baseURL}/mg-top-diseases`,
          className: 'Chart-card-wrapper',
          name: 'doenca',
          title: 'Número de casos das top 6 doenças',
          subtitle: 'Por estado em 2017',
          dataKeyX: 'número de pessoas',
          dataKeyY: '',
          type: 'area',
        },
        {
          url: `${baseURL}/dengue-per-region`,
          className: 'Chart-card-wrapper',
          name: 'region',
          title: 'Número de casos de dengue',
          subtitle: 'Por regiao',
          dataKeyX: 'número de pessoas',
          dataKeyY: '',
          type: 'bar',
        },
        {
          url: `${baseURL}/children-protected-against-poliomielite`,
          className: 'Chart-card-wrapper',
          name: 'region',
          title: 'Crianças vacinadas contra poliomielite',
          subtitle: 'Por regiao',
          dataKeyX: 'meninos',
          dataKeyY: 'meninas',
          type: 'bar',
        },
      ],
      charts: [],
    }
  }

  toggleMenuVisibility = () => this.setState({ menuVisibility: !this.state.menuVisibility })

  requestCharts = (objs) => {
    objs.map(({ url, name, title, subtitle, dataKeyX, dataKeyY, type, className }, index) => {
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
          {/*
          <Chart
            className="Chart-card-wrapper"
            name="state"
            title="Pessoas doentes"
            subtitle="Por estado em 2017"
            dataKeyX={'número de pessoas'}
            dataKeyY={''}
            data={this.state.stateChart}
            type="area"
          />
          <Chart
            className="Chart-card-wrapper"
            name="doenca"
            title="Minas Gerais"
            subtitle="Número de casos das top 6 doenças"
            dataKeyX={'número de pessoas'}
            dataKeyY={''}
            data={this.state.mgStateChart}
            type="bar"
          />
          <Chart
            className="Chart-card-wrapper"
            name="name"
            dataKeyX={'pv'}
            dataKeyY={'uv'}
            data={data}
          />
          */
          }
        </div>
      </div>
    )
  }
}
