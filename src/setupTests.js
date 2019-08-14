import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

// comfigure enzyme for all test.js page
// must be in src folder
Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true
})