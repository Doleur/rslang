import React from 'react';
import { act } from 'react-dom/test-utils';
import Pagination from '@material-ui/lab/Pagination';
import { mount } from 'enzyme';

import BasicPagination from './Pagination';

const updateCurrentPage = jest.fn();

const coponentMount = () =>
  mount(
    <BasicPagination
      currentPage={1}
      updateCurrentPage={updateCurrentPage}
      pageCount={2}
    />
  );

describe('<BasicPagination />', () => {
  it('renders right components', () => {
    const component = coponentMount();

    expect(component.find(Pagination)).toHaveLength(1);
  });

  it('should trigger updateCurrentPage function', () => {
    const component = coponentMount();
    const nextPageButton = component.find(Pagination).find('button').at(2);

    expect(nextPageButton.text()).toBe('2');
    expect(updateCurrentPage).toHaveBeenCalledTimes(0);

    act(() => {
      nextPageButton.simulate('click');
    });

    expect(updateCurrentPage).toHaveBeenCalledTimes(1);
    expect(updateCurrentPage).toHaveBeenCalledWith(2);
  });
});
