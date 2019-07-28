import React from 'react';

import Header from './components/Header'
import Main from './pages/main'
import Criar from './components/Criar';
// import Apagar from './components/Apagar';

const App = () => (
  <div className="App">
    <Header />
    <Criar />
    {/* <Apagar /> Standby */}
    <Main />
  </div>
)

export default App;
