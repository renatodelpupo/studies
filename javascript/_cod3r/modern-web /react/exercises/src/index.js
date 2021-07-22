import ReactDOM from 'react-dom'
import { GoodMorning, GoodNight } from './components/Greeting'
import Welcome from './components/Welcome'

ReactDOM.render(
  <div>
    <Welcome name="Mike" />
    <GoodMorning name="Matt" />
    <GoodNight name="Kevin" />
  </div>,
  document.querySelector('#root')
)
