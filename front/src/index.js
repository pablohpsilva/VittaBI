import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import './index.css'
import Landing from './pages/Landing'
import AllApp from './pages/AllApp'
import DiseaseApp from './pages/DiseaseApp'
import RegionApp from './pages/RegionApp'
import registerServiceWorker from './registerServiceWorker'

import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Landing}/>
      <Route path="/app" component={AllApp}/>
      <Route path="/region" component={RegionApp}/>
      <Route path="/diaseases" component={DiseaseApp}/>
    </div>
  </Router>
  , document.getElementById('root')
)
registerServiceWorker()
