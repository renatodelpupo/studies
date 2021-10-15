import { Fragment } from 'react'

const Welcome = (attrs) => {
  return (
    // React.Fragment avoid the addition of tag for component wrapping
    <Fragment>
      <h1>Welcome, {attrs.name}</h1>
      <h2>What's up?</h2>
    </Fragment>
  )
}

export default Welcome
