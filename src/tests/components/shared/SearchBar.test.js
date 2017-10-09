/* eslint-disable */
import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import SearchBox from '../../../components/shared/SearchBar'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const wrapper = shallow(<SearchBox/>)
    return {
        wrapper
    }
}

describe('SearchBox', () => {
    test('handleInput method', () => {
        const {wrapper} = setup()
        const event = {
            target: {
                value: 'Jon Snow'
            }
        }
        wrapper.instance().handleInput(event)
        expect(wrapper.state().search).toEqual('Jon Snow')
    })
})
