import React from 'react';
import ReactDOM from "react-dom";
import { shallow } from 'enzyme';

import mocker from '../helpers/mocker';
import Carousel from '../../src/components/landingPage/Carousel';

('use strict');
jest.useFakeTimers();

describe('Carousel', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Carousel />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('initialises', () => {
  const carouselInitMock = jest.fn();
  const carouselInstanceDestroyMock = jest.fn();
  const carouselMock = {
    init: (el, options) => {
      carouselInitMock(options);
      return {
        destroy: carouselInstanceDestroyMock,
      };
    },
  };

  const restore = mocker('Carousel', carouselMock);

  beforeEach(() => {
    carouselInitMock.mockClear();
    carouselInstanceDestroyMock.mockClear();
  });

  afterAll(() => {
    restore();
  });

  test('uses default options if none are given', () => {
    shallow(<Carousel />);

    expect(carouselInitMock).toHaveBeenCalledWith({
      dist: 0,
      duration: 400,
      fullWidth: true,
      indicators: true,
    });
  });

  test('should navigate to next images', () => {
    document.body.innerHTML = '<div id="root"></div>';
    ReactDOM.render(<Carousel/>, document.getElementById('root'));
    var elements = document.getElementsByClassName('carousel carousel-slider')
    jest.advanceTimersByTime(4001);
    expect(elements.length).toBe(1)
  });
});
