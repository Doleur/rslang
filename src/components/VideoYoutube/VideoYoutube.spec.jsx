import React from 'react';
import YouTube from 'react-youtube';
import { shallow } from 'enzyme';

import VideoYoutube from './VideoYoutube';

describe('<VideoYoutube />', () => {
  it('renders right components', () => {
    const component = shallow(<VideoYoutube />);

    expect(component.find(YouTube)).toHaveLength(1);
  });
});
