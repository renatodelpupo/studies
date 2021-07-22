import ReactDOM from 'react-dom'
import { GoodMorning, GoodNight } from './components/Greeting'
import Welcome from './components/Welcome'
import WriteDown from './components/WriteDown'
import WriteDown2 from './components/WriteDown2'

ReactDOM.render(
  <div>
    <Welcome name="Mike" />
    <GoodMorning name="Matt" />
    <GoodNight name="Kevin" />
    <WriteDown />
    <WriteDown2 />
  </div>,
  document.querySelector('#root')
)
