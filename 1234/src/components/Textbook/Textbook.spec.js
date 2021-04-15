import React from 'react';
import { shallow } from 'enzyme';

import GroupWords from '../GroupWords';
import Textbook from './Textbook';

describe('<Textbook />', () => {
  it('renders right components', () => {
    const component = shallow(<Textbook />);

    expect(component.find(GroupWords)).toHaveLength(6);
  });
});
