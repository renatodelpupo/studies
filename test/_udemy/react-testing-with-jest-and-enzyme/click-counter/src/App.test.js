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
 * @param {object} props
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => shallow(<App {...props} />)

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper
 * @param {string} val
 */
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`)

test('renders without crashing', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'component-app')

  expect(appComponent.length).toBe(1)
})

test('renders non-empty component without crashing', () => {
  const wrapper = setup()

  expect(wrapper.exists()).toBe(true)
})

test('renders counter display', () => {
  const wrapper = setup()
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')

  expect(counterDisplay.length).toBe(1)
})

test('counter starts at 0', () => {
  const wrapper = setup()
  const count = findByTestAttr(wrapper, 'count').text()

  expect(count).toBe('0')
})

describe('increment', () => {
  test('renders button', () => {
    const wrapper = setup()
    const button = findByTestAttr(wrapper, 'button-increment')
    expect(button.length).toBe(1)
  })

  test('counter increments when button is clicked', () => {
    const wrapper = setup()

    // find the button
    const button = findByTestAttr(wrapper, 'button-increment')

    // click the button
    button.simulate('click')

    // find the display, and test that the number has been incremented
    const count = findByTestAttr(wrapper, 'count').text()
    expect(count).toBe('1')
  })
})

describe('decrement', () => {
  test('renders button', () => {
    const wrapper = setup()
    const button = findByTestAttr(wrapper, 'button-decrement')
    expect(button.length).toBe(1)
  })

  test('counter decrements when button is clicked and state is greater than 0', () => {
    const wrapper = setup()

    const incButton = findByTestAttr(wrapper, 'button-increment')
    incButton.simulate('click')

    const decButton = findByTestAttr(wrapper, 'button-decrement')
    decButton.simulate('click')

    const count = findByTestAttr(wrapper, 'count').text()
    expect(count).toBe('0')
  })
})

describe('errors', () => {
  test('error does not show when not needed', () => {
    const wrapper = setup()
    const errorDiv = findByTestAttr(wrapper, 'error-message')
    const errorHasHiddenClass = errorDiv.hasClass('hidden')

    expect(errorHasHiddenClass).toBe(true)
  })

  describe('counter is 0 and decrement is clicked', () => {
    let wrapper

    beforeEach(() => {
      wrapper = setup()
      const button = findByTestAttr(wrapper, 'button-decrement')

      button.simulate('click')
    })

    test('error shows', () => {
      const errorDiv = findByTestAttr(wrapper, 'error-message')
      const errorHasHiddenClass = errorDiv.hasClass('hidden')

      expect(errorHasHiddenClass).toBe(false)
    })

    test('counter still displays 0', () => {
      const count = findByTestAttr(wrapper, 'count').text()

      expect(count).toBe('0')
    })

    test('clicking increment clears the error', () => {
      const incButton = findByTestAttr(wrapper, 'button-increment')
      incButton.simulate('click')

      const errorDiv = findByTestAttr(wrapper, 'error-message')
      const errorHasHiddenClass = errorDiv.hasClass('hidden')

      expect(errorHasHiddenClass).toBe(true)
    })
  })
})
