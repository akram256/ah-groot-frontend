import React from 'react';
import { mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import { articleReporting } from '../../src/actions/report/reportingActions';
import { ReportingContainer } from '../../src/containers/report/ReportingContainer';
import Report from '../../src/components/report/Report';


describe('Article reporting', () => {
  const props = {
    reported_reason: '',
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    slug: 'slug',
    articleReporting: jest.fn(),
  };
  const reportingData = {
    reported_reason: 'This article is abusive',
  };

  const WrongReportingData = {
    report: {},
  };
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('hits mapStateToProps', () => {
    mount(<ReportingContainer />);
  });

  it('should not report article', () => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({});

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: { errors: [{}] },
      });
    });

    const expectedAction = [
      { type: 'STARTED' },
      { type: 'FAILED', err: { errors: [{}] } },
    ];
    return store.dispatch(articleReporting(WrongReportingData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('A user should report an article successfully', () => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({
      error: null,
      successMsg: null,
      loading: false,
    });

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: {
          id: 1,
          reported_at: '2019-04-24T12:56:26.704977+03:00',
          reported_reason: 'this is a hate article',
          article: 12,
          reporter: 5,
        },
      });
    });
    const expectedAction = [
      { type: 'STARTED' },
      {
        type: 'SUCCESSFUL',
        data: {
          id: 1,
          reported_at: '2019-04-24T12:56:26.704977+03:00',
          reported_reason: 'this is a hate article',
          article: 12,
          reporter: 5,
        },
      },
    ];

    return store.dispatch(articleReporting(reportingData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('should change property name in the state and call submit', () => {
    const wrapper = shallow(<ReportingContainer {...props} />);
    const instance = wrapper.instance();
    const event = {
      target: {
        reported_reason: 'this article is dope',
      },
    };
    instance.onChange(event);
    event.preventDefault = jest.fn();
    instance.onSubmit(event);
  });

  it('should change submit with data', () => {
    const wrapper = shallow(<ReportingContainer {...props} />);
    const instance = wrapper.instance();
    instance.setState({ reported_reason: 'this article has a lot of hate' });
    const event = {};
    event.preventDefault = jest.fn();
    instance.onSubmit(event);
  });
});
