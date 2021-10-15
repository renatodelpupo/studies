import { childrenWithProps } from '../utils/utils'

export default (props) => (
  <div>
    <h1>
      {props.name} {props.surname}
    </h1>

    <h2>Children</h2>

    <ul>{childrenWithProps(props)}</ul>
  </div>
)
