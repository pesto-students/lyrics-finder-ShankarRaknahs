import React from 'react';

import renderer from 'react-test-renderer';

// import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Profile from '../Profile';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJSON from 'enzyme-to-json';
Enzyme.configure({ adapter: new Adapter() });
const { mount } = Enzyme;

describe('<Profile />', () => {
  it('render correctly (snapshot)', () => {
    const user = { firstName: 'John', secondName: 'Doe' };
    const tree = renderer.create(<Profile {...user} />);
    expect(toJSON(tree)).toMatchSnapshot();
  });

  it('render correctly using Enzyme (snapshot)', () => {
    const user = { firstName: 'John', secondName: 'Doe' };
    const tree = mount(<Profile {...user} />);
    expect(toJSON(tree)).toMatchSnapshot();
  });
});
