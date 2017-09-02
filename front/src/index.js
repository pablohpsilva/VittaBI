import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import './index.css'
import Landing from './pages/Landing'
import Application from './pages/Application'
import registerServiceWorker from './registerServiceWorker'

import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Landing}/>
      <Route path="/app" component={Application}/>
    </div>
  </Router>
  , document.getElementById('root')
)
registerServiceWorker()
