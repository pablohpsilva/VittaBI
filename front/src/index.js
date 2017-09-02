import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Application from './pages/Application'
import registerServiceWorker from './registerServiceWorker'

import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(<Application />, document.getElementById('root'))
registerServiceWorker()
