import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import App from './App'

Enzyme.configure({
  adapter: new EnzymeAdapter()
})

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />)

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`)

test('renders without crashing', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'component-app')

  expect(appComponent.length).toBe(1)
})

test('renders button', () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, 'button-increment')

  expect(button.length).toBe(1)
})

test('renders counter display', () => {
  const wrapper = setup()
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')

  expect(counterDisplay.length).toBe(1)
})

test('counter starts at 0', () => {})

test('clicking on button increments counter display', () => {})

