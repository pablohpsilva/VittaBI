import React from 'react'
import './style.css'
import {
  Button,
  Divider,
  Image,
} from 'semantic-ui-react'
const LOGO_VITTA = require('./img/logo-vitta.png')

const Header = (props) => (
  <div className="landing-header">
    <Image
      centered
      src={LOGO_VITTA}
      size="medium"
    />
    <h1
      className="landing-header-title"
    >
      Auxiliando o crescimento da informação,<br/>contribuindo para a saúde do Brasil.
    </h1>
    <Divider />
    <Button
      inverted
      size="massive"
      className="landing-header-button"
      onClick={props.handleScrollPage}
    >
      + Novidades
    </Button>
  </div>
)

Header.prototype = {
  handleScrollPage: React.PropTypes.func, // eslint-disable-line
}

export default Header
