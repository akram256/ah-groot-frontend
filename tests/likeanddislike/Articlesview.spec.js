import React from 'react';
import { shallow } from 'enzyme';
import AllArticleView from '../../src/components/articles/AllArticleView'

describe('Articles', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<AllArticleView/>);
    expect(wrapper).toMatchSnapshot();
  });
});