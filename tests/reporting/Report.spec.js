import React from 'react';
import reducer from '../../src/reducers/reportingReducer';
import { shallow } from 'enzyme';
import Report from '../../src/components/report/Report';

describe('reporting Reducer', () => {
  const data = {};
  const props = {
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    reported_reason: '',
  }
  it('should match snapshot', () => {
    const wrapper = shallow(<Report {...props}/>);
    expect(wrapper).toMatchSnapshot();
  })
  it('should handle starting of the rating process', () => {
    expect(
      reducer([], {
        type: 'STARTED',
      }),
    ).toEqual({
      error: null,
      successMsg: null,
      loading: true,
    });
  });

  it('should have data in successMSg successfully', () => {
    expect(
      reducer([], {
        type: 'SUCCESSFUL',
        data,
      }),
    ).toEqual({ loading: false, successMsg: undefined });
  });

  it('should have failed data in successMSg successfully', () => {
    expect(
      reducer(undefined, {
        type: 'FAILED',
        error: { err: 'error' },
      }),
    ).toEqual({ loading: false, successMsg: null });
  });


  it('should return default state', () => {
    expect(
      reducer([], {
        type: 'default',
      }),
    ).toEqual([]);
  });
});
