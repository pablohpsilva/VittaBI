import React, { Component } from 'react'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  // Pie,
  // PieChart,
  // Radar,
  // RadarChart,
  // RadialBar,
  // RadialBarChart,
  Scatter,
  ScatterChart,
  // Treemap,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

export default class Chart extends Component {
  constructor(props) {
    super(props)
    this.getChartComponent = this.getChartComponent.bind(this)
    this.getChartUtilComponent = this.getChartUtilComponent.bind(this)

    this.state = {
      type: this.props.type,
      loopEvent: null,
    }
  }

  componentDidMount() {
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  getCleanType(type) {
    return type.trim().toLowerCase().replace('chart', '')
  }

  getChartComponent (type) {
    switch (this.getCleanType(type)) {
      case 'area':
        return AreaChart
      case 'bar':
        return BarChart
      case 'line':
        return LineChart
      // case 'pie':
      //   return PieChart
      // case 'radar':
      //   return RadarChart
      // case 'radialbar':
        // return RadialBarChart
      case 'scatter':
        return ScatterChart
      // case 'tree':
      //   return Treemap
      default:
        return Line
    }
  }

  getChartUtilComponent(type) {
    switch (this.getCleanType(type)) {
      case 'area':
        return Area
      case 'bar':
        return Bar
      case 'line':
        return Line
      // case 'pie':
      //   return Pie
      // case 'radar':
      //   return Radar
      // case 'radialbar':
      //   return RadialBar
      case 'scatter':
        return Scatter
      case 'tree':
        return null
      default:
        return Line
    }
  }

  render() {
    const AuxChart = this.getChartComponent(this.props.type)
    const AuxChartUtil = this.getChartUtilComponent(this.props.type)

    return (
      AuxChart
        ? (<AuxChart
          width={this.props.width || 600}
          height={this.props.height || 300}
          data={this.props.data}
          margin={this.props.margin || { top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {
            this.props.showCartesianGrid
              ? (<CartesianGrid strokeDasharray={this.props.chartStrokeGrid || "2 5"} />)
              : ''
          }
          {
            AuxChartUtil
              ? (<AuxChartUtil type="monotone" dataKey={this.props.dataKeyX || 'pv'} fill="#8884d8" />)
              : ''
          }
          {
            AuxChartUtil
              ? (<AuxChartUtil type="monotone" dataKey={this.props.dataKeyY || 'uv'} fill="#82ca9d" />)
              : ''
          }
        </AuxChart>)
        : null
    )
  }
}
