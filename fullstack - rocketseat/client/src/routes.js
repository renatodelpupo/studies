import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/main'
import Tabela from './pages/tabela'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route exact path='/tabela' component={Tabela} />
    </Switch>
  </BrowserRouter>
)

export default Routes
