import React from 'react'
import { shallow } from 'enzyme'

import Navbar from './Navbar'
import { findByTestAttr } from '../../utils'

/** 
* Facroty function to create s ShallowWrapper for the App component.
* @function setup
* @param {object} props - Component props specific to this setup.
* @param {object} state - inimial state for setup.
* @returns {shallowWrapper}
*/
const setup = (props={}, state=null) => {
const wrapper = shallow(<Navbar {...props} />) // shallow from enzyme
  if (state) wrapper.setState(state)
    return wrapper
}

describe('Navbar compoent', () => {
  
  test('Navbar is render without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'navbar')
    expect(component.length).toBe(1)
  })

})