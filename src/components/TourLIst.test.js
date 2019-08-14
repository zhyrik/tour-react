import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '../../utils'
import TourList from './TourLIst'

/** 
* Facroty function to create s ShallowWrapper for the TourLIst component.
* @function setup
* @param {object} props - Component props specific to this setup.
* @param {object} state - inimial state for setup.
* @returns {shallowWrapper}
*/
const setup = (props={}, state=null) => {
  const wrapper = shallow(<TourList {...props} />) // shallow from enzyme
  if (state) wrapper.setState(state)
    return wrapper
}

describe('TourList component', () => {
  
  test('should render TourLlist without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'tour-list')
    expect(component.length).toBe(1)
  })

})