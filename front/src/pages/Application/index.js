import React, { Component } from 'react';
import './style.css';
import 'semantic-ui-css/semantic.min.css';

import fetchData from '../../utils/request'

import Chart from '../../components/CardChart'
import Navbar from '../../components/Navbar'

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
]

export default class Application extends Component {
  constructor() {
    super()
    this.state = {
      menuVisibility: false,
      stateChart: [],
      mgStateChart: [],
    }
  }

  toggleMenuVisibility = () => this.setState({ menuVisibility: !this.state.menuVisibility })

  componentDidMount() {
    fetchData('http://localhost:3001/seek-people-per-state')
      .then(data => {
        this.setState({ stateChart: data })
      })
      .catch(err => {
        this.setState({ stateChart: [] })
      })

    fetchData('http://localhost:3001/mg-top-diseases')
      .then(data => {
        this.setState({ mgStateChart: data })
      })
      .catch(err => {
        this.setState({ mgStateChart: [] })
      })
  }

  render() {
    return (
      <div className="App">
        <Navbar
          onToggle={this.toggleMenuVisibility}
        />
        <div className="App-content">
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
        </div>
      </div>
    )
  }
}
