import React from 'react';
import { shallow } from 'enzyme';

import ArticleCard from '../../src/components/landingPage/ArticleCard';

describe('ArticleCard', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<ArticleCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
