import React, { Component } from 'react';
import './style.css';
import 'semantic-ui-css/semantic.min.css';

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
    }
  }

  toggleMenuVisibility = () => this.setState({ menuVisibility: !this.state.menuVisibility })

  componentDidMount() {
    // const myHeaders = new Headers();

    // const myInit = {
    //   method: 'GET',
    //   headers: myHeaders,
    //   mode: 'cors',
    //   cache: 'default'
    // };
    // window.fetch('http://localhost:3001/seek-people-per-state', myInit)
    window.fetch('http://localhost:3001/seek-people-per-state')
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.setState({ stateChart: data })
      })
      .catch(err => {
        this.setState({ stateChart: [] })
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
            type="bar"
          />
          <Chart
            className="Chart-card-wrapper"
            name="name"
            dataKeyX={'pv'}
            dataKeyY={'uv'}
            data={data}
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
