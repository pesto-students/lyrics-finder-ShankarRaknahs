import React from 'react';

import renderer from 'react-test-renderer';

// import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Header from '../Header';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJSON from 'enzyme-to-json';
Enzyme.configure({ adapter: new Adapter() });
const { mount } = Enzyme;

describe('<Header />', () => {
  it('render correctly (snapshot)', () => {
    const app = { firstName: 'Lyrics', secondName: 'Finder' };
    const tree = renderer.create(<Header {...app} />);
    expect(toJSON(tree)).toMatchSnapshot();
  });

  it('render correctly using Enzyme (snapshot)', () => {
    const app = { firstName: 'Lyrics', secondName: 'Finder' };
    const tree = mount(<Header {...app} />);
    expect(toJSON(tree)).toMatchSnapshot();
  });
});
