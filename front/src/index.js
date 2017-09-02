import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './index.css'
import Landing from './pages/Landing'
import registerServiceWorker from './registerServiceWorker'

import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Landing}/>
  </Router>
  , document.getElementById('root')
)
registerServiceWorker()
