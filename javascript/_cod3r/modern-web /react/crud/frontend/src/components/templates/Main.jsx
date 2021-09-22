import './Main.css'
import { Fragment } from 'react'
import Header from './Header'

const Main = (props) => {
  return (
    <Fragment>
      <Header />
      <main className="content">Content</main>
    </Fragment>
  )
}

export default Main
