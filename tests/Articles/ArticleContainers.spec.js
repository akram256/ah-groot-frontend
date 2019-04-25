import React from 'react';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import moxios from 'moxios';

import ArticleFeed, { ArticleFeed as DumpArticleFeed , mapStateToProps} from '../../src/containers/Articles/ArticleFeed';
import data from '../landing_page/maxios_mock';
import SelectCategory, { SelectCategory as DumpCategory, mapDispatchToProps } from '../../src/containers/Articles/Category';


describe('All Article container:', () => {
    const initialState = {
        articles : data.article.articles.results
      };
      const mockStore = configureStore([thunk]);
      let store;

      beforeEach(() => {
        store = mockStore(initialState);
        moxios.install();
      });

      afterEach(function () {
        moxios.uninstall();
      });

    it('ArticleFeed should render without crashing', () => {
    const wrapper = shallow(<DumpArticleFeed
    allArticles ={data.article.articles.results}
    firstArticles ={[]}
    paginateArticles = {[]}
    getAllArticles={()=>jest.fn()}
    fetchOriginal={()=>jest.fn()}
     />);
    expect(wrapper).toMatchSnapshot();
  });

  it('ArticleFeed should fetch data', () => {
    const wrapper = shallow(<DumpArticleFeed
    allArticles ={data.article.articles.results}
    firstArticles ={[]}
    paginateArticles = {[]}
    getAllArticles={()=>jest.fn()}
    fetchOriginal={()=>jest.fn()}
    fetchNext = {()=>jest.fn()}
     />);
     const event = {
      preventDefault : jest.fn(),
    }
    wrapper.instance().fetchData(event)
  });

  it('ArticleFeed should fetch next', () => {
    const wrapper = shallow(<DumpArticleFeed
    allArticles ={data.article.articles.results}
    firstArticles ={[]}
    paginateArticles = {[]}
    getAllArticles={()=>jest.fn()}
    fetchOriginal={()=>jest.fn()}
    fetchNext = {()=>jest.fn()}
     />);
     const event = {
      preventDefault : jest.fn(),
    }
    wrapper.instance().fetchPrevious(event)
  });

  it('ArticleFeed should mount without crashing', () => {
    const wrapper = shallow(<Router><DumpArticleFeed
    allArticles ={data.article.articles.results}
    getAllArticles={()=>jest.fn()}
     /></Router>);
     const push = jest.fn();
     wrapper.setProps({ history: { push } })
    expect(wrapper).toMatchSnapshot();
  });

  

  it('ArticleFeed should render with store without crashing', () => {
     const wrapper = shallow(<Router><Provider store={store}><ArticleFeed
        allArticles ={data.article.articles.results}

        getAllArticles={()=>jest.fn()}
     /></Provider> </Router>);
     wrapper.update();
     expect(wrapper).toMatchSnapshot();
  });

  it('ArticleFeed should navigate to edit articles page', () => {
    const wrapper = shallow(<Router><Provider store={store}><ArticleFeed
      allArticles ={data.article.articles.results}
      getAllArticles={()=>jest.fn()}
       /></Provider></Router>);
  });
});

describe('SelectCategory', () => {
    const initialState = {
        articles : data.article.articles.results
      };
      const mockStore = configureStore([thunk]);
      let store;

      beforeEach(() => {
        store = mockStore(initialState);
        moxios.install();
      });

      afterEach(function () {
        moxios.uninstall();
      });


      it('should render without crashing', () => {
        const wrapper = shallow(<DumpCategory
            allCategories ={data.category.categorys.results}
            getAllCategories={()=>jest.fn()}
            setCategory ={()=>jest.fn()}
         />);
        expect(wrapper).toMatchSnapshot();
      });

      it('should render with store without crashing', () => {
        const wrapper = mount(<Provider store={store}><SelectCategory
            allCategories ={data.category.categorys.results}
            getAllCategories={()=>jest.fn()}
        /></Provider>);
        wrapper.update();
        expect(wrapper).toMatchSnapshot();
     });

     it('should render with store without default category', () => {
      const wrapper = mount(<Provider store={store}><SelectCategory
          allCategories ={data.category.categorys.results}
          getAllCategories={()=>jest.fn()}
          defaultCategory={{'slug':'slug', "name":"name"}}
      /></Provider>);
      expect(wrapper).toMatchSnapshot();
   });

   it('should respond to on change events', () => {
    const wrapper = shallow(<DumpCategory
        allCategories ={data.category.categorys.results}
        getAllCategories={()=>jest.fn()}
        setCategory ={()=>jest.fn()}
        onChangeCategory={()=>jest.fn()}
     />);
   const event = {slug: "spam", name: 'spam'};

    wrapper.find('.basic-single').simulate('change', event);
    expect(wrapper).toMatchSnapshot();
  });

  it('should respond to on change events', () => {
    const wrapper = shallow(<DumpCategory
        allCategories ={data.category.categorys.results}
        getAllCategories={()=>jest.fn()}
        setCategory ={()=>jest.fn()}
        onChangeCategory={()=>jest.fn()}
     />);

  });

  it('should match state to props', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).setCategory();
 });

 it('should match state to props', () => {
  const defualtState ={
    login: 'd'
  };
  mapStateToProps(defualtState);
});
});

