import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Heading from '.'

describe('Heading component', ()=>{

  it('render without crashing', () => {
    shallow(<Heading>Heading</Heading>)
  })

  it('Should contain props for heading', ()=>{
    const wrapper = shallow(<Heading>This is heading</Heading>)
    expect(shallowToJson(wrapper).node.props.children[1]).toEqual("This is heading")
  })
})