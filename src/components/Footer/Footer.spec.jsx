import React from 'react';
import { mount } from 'enzyme';

import Footer from './Footer';

describe('<Footer />', () => {
  it('renders right components', () => {
    const component = mount(<Footer />);
    const links = component.find('a');

    expect(links).toHaveLength(4);
    expect(links.at(0).text()).toBe('Alena-Zykava');
    expect(links.at(0).prop('href')).toBe('https://github.com/Alena-Zykava');
    expect(links.at(1).text()).toBe('AndryGinger');
    expect(links.at(1).prop('href')).toBe('https://github.com/AndryGinger');
    expect(links.at(2).text()).toBe('doleur');
    expect(links.at(2).prop('href')).toBe('https://github.com/doleur');
    expect(links.at(3).find('img')).toHaveLength(1);
    expect(links.at(3).prop('href')).toBe('https://rs.school/js/');
  });
});
