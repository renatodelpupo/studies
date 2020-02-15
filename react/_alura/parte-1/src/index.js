import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App'
import AutorBox from './Autor'
import Home from './Home'
import './index.css'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/autor" component={AutorBox} />
      <Route path="/livro" />
    </Route>
  </Router>,
  document.getElementById('root')
)