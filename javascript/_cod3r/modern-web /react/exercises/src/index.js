import ReactDOM from 'react-dom'
import Child from './components/Child'
import { GoodMorning, GoodNight } from './components/Greeting'
import Parent from './components/Parent'
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

    <hr />

    <Parent name="Mike" surname="You">
      <Child name="Matt" />
      <Child name="Kevin" />
      <Child name="Evan" />
    </Parent>
  </div>,
  document.querySelector('#root')
)
