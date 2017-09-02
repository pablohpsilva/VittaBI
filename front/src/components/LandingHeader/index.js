import React from 'react'
import './style.css'
import {
  Button,
  Divider,
  Image,
} from 'semantic-ui-react'
const LOGO_VITTA = require('./img/logo-vitta.png')

const Header = (props) => (
  <div
    className="landing-header"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <div>
      <Image
        centered
        src={LOGO_VITTA}
        size="medium"
      />
      <h1 className="landing-header-title">
        Vitta auxiliando o crescimento da informação,<br />contribuindo para a saúde do Brasil.
      </h1>
      <Divider />
      <Button
        inverted
        size="massive"
        className="landing-header-button"
        onClick={props.handleScrollPage}>
        + Novidades
    </Button>
    </div>
  </div>
)

Header.prototype = {
  handleScrollPage: React.PropTypes.func, // eslint-disable-line
}

export default Header
