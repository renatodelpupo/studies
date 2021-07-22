import ReactDOM from 'react-dom'
import { GoodMorning, GoodNight } from './components/Greeting'
import Welcome from './components/Welcome'
import WriteDown from './components/WriteDown'

ReactDOM.render(
  <div>
    <Welcome name="Mike" />
    <GoodMorning name="Matt" />
    <GoodNight name="Kevin" />
    <WriteDown />
  </div>,
  document.querySelector('#root')
)
