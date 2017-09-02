import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Landing from './pages/Landing'
import registerServiceWorker from './registerServiceWorker'

import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(<Landing />, document.getElementById('root'))
registerServiceWorker()
