import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import scroll from 'scroll'
import ease from 'ease-component'
import scrollDoc from 'scroll-doc';

import Header from '../../components/LandingHeader'
import Content from '../../components/LandingContent'

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
