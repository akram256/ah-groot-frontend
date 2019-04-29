import React from 'react';
import { shallow } from 'enzyme';

import ArticleCard, { ArticleCard as App} from '../../src/components/landingPage/ArticleCard';

import { BrowserRouter as Router } from 'react-router-dom';
describe('ArticleCard', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<ArticleCard />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should respond to click events', () => {
    const wrapper = shallow(<App history={{ push: jest.fn()}}/>);
    const event = {
      currentTarget: {
        getAttribute:  jest.fn(),
      }
    };
    wrapper.find('.card-content.black-text').simulate('click', event);
    expect(wrapper).toMatchSnapshot();
  });
});
