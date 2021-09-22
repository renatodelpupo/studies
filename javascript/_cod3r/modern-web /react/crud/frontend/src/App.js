import './App.css'
import Logo from './components/atoms/Logo'
import Footer from './components/organisms/Footer'
import Nav from './components/organisms/Nav'
import Main from './components/templates/Main'

function App() {
  return (
    <div className="app">
      <Logo />
      <Nav />
      <Main />
      <Footer />
    </div>
  )
}

export default App
