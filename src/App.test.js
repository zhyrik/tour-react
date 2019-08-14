import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '../utils'
import App from './App'

/** 
* Facroty function to create s ShallowWrapper for the App component.
* @function setup
* @param {object} props - Component props specific to this setup.
* @param {object} state - inimial state for setup.
* @returns {shallowWrapper}
*/
const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} />) // shallow from enzyme
  if (state) wrapper.setState(state)
    return wrapper
}

describe('App component', () => {
  
  test('App component render without errors', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'app')
    expect(component.length).toBe(1)
  })

})