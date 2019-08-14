import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, checkProps } from '../../utils'
import Tour from './Tour'

/** 
* Facroty function to create s ShallowWrapper for the component.
* @function setup
* @param {object} props - Component props specific to this setup.
* @param {object} state - inimial state for setup.
* @returns {shallowWrapper}
*/
const setup = (props={}, state=null) => {
  const wrapper = shallow(<Tour {...props} />) // shallow from enzyme
  if (state) wrapper.setState(state)
    return wrapper
}

describe('', () => {
  
  let wrapper
  let mockFunk
  beforeEach(() => {
    mockFunk = jest.fn()
    const tour = {
      id: 1,
      city: "new york",
      img: "./img/newyork.jpeg",
      name: "new york bridge tour",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,repellendus!"
    }
    const props = {
      tour,
      removeTour: mockFunk
    }
    wrapper = setup(props)
  })
    
  test('Tour component render without error', () => {
    const component = findByTestAttr(wrapper, 'tour')
    expect(component.length).toBe(1)
  })

  test('should emit callback on click event (close button)', () => {
    const button = findByTestAttr(wrapper, 'button-close')
    button.simulate('click')
    const callback = mockFunk.mock.calls.length
    expect(callback).toBe(1)
  })

  describe('checking PropTypes', () => {
    
    test('should NOT throw a warning', () => {
      const expectedProps = {
        tour: {},
        removeTour: () => {}
      }
      const warning = checkProps(Tour, expectedProps)
      expect(warning).toBeUndefined()
    })
  
  })

})