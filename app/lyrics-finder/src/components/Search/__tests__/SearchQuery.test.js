import React from 'react';

import renderer from 'react-test-renderer';

// import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import SearchQuery from '../SearchQuery';
import ListData from '../../List/ListData';

import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJSON from 'enzyme-to-json';
Enzyme.configure({ adapter: new Adapter() });
const { mount } = Enzyme;

describe('<SearchQuery />', () => {
  it('render correctly (snapshot)', () => {
    const tree = renderer.create(<SearchQuery />);
    expect(toJSON(tree)).toMatchSnapshot();
  });

  it('render correctly using Enzyme (snapshot)', () => {
    const tree = mount(<SearchQuery />);
    expect(toJSON(tree)).toMatchSnapshot();
  });
});

// describe('Children <ListData/>', () => {
//   it('is present', () => {
//     const [searchObj, setSearchObj] = React.useState({
//       query: '',
//       data: [{ test }],
//       isLoading: false,
//     });

//     const viewport = shallow(<SearchQuery />);
//     expect(
//       viewport.find(
//         <ListData category='#Search Results' data={searchObj.data} />
//       ).length
//     ).toBe(1);
//   });
// });
