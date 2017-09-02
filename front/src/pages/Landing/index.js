import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import scroll from 'scroll'
import ease from 'ease-component'
import scrollDoc from 'scroll-doc';
import {
  Button,
  Divider,
  Image,
} from 'semantic-ui-react'
import Header from './Header'
import Content from './Content'

class Landing extends Component {

  constructor(props) {
    super(props)

    this.scrollSecondContainner = this.scrollSecondContainner.bind(this)
  }

  scrollSecondContainner() {
    const page = scrollDoc()
    const scrollDiv = ReactDOM.findDOMNode(this.refs.landingContainer)
    scroll.top(page, scrollDiv.offsetTop, { ease: ease.linear })
  }

  render() {
    return (
      <div>
        <Header
          handleScrollPage={this.scrollSecondContainner}
        />
        <div ref="landingContainer">
          <Content />
        </div>
      </div>
    )
  }
}

export default Landing
