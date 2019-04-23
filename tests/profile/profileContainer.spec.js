import configureStore from 'redux-mock-store';
import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import moxios from 'moxios';

import ProfileContainer, {
  ProfileContainer as App, mapDispatchToProps, mapStateToProps
} from '../../src/containers/profile/Profile';

describe('ProfileContainer', () => {
  const initialState = {
    login: { isSuccesfull: false, token: '' },
  };

  const mockFn = jest.fn();
  const mockStore = configureStore([thunk]);
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('should render without crashing', () => {
    const wrapper = shallow(<App profile={{name:"wali"}} errors={{error:"error"}} loading={{loading:true}} 
    getProfiles={mockFn} updateProfile={mockFn}/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should call name change',
    () => {
        const wrapper = shallow(<App profile={{name:"wali"}} errors={{error:"error"}} loading={{loading:true}} 
        getProfiles={mockFn} updateProfile={mockFn}/>
        );
      const event ={
          target:{value:''}
      }
      wrapper.instance().nameChange(event);
    });

    it('should call bioChange',
    () => {
        const wrapper = shallow(<App profile={{name:"wali"}} errors={{error:"error"}} loading={{loading:true}} 
        getProfiles={mockFn} updateProfile={mockFn}/>
        );
      const event ={
        target:{value:''}
    }
      wrapper.instance().bioChange(event);
    });

    
    // it('should call picChange',
    // () => {
    //     const wrapper = shallow(<App profile={{name:"wali"}} errors={{error:"error"}} loading={{loading:true}} 
    //     getProfiles={mockFn} updateProfile={mockFn}/>
    //     );
    //   const event ={
    //     preventDefault: mockFn,
    //     target:{files:''}
    // }
    //   wrapper.instance().picChange(event);
    // });

    it("should call picChange", () =>{
      const wrapper = shallow(<App profile={{name:"wali"}} errors={{error:"error"}} loading={{loading:true}} 
        getProfiles={mockFn} updateProfile={mockFn}/>
        );
        const event = {
          preventDefault : mockFn,
          target:{files: [new File(["tests/assets/test.png"], "test.png")]}
        }
        wrapper.instance().picChange(event);
    });

   
    it('should open',
    () => {
        const wrapper = shallow(<App profile={{name:"wali"}} errors={{error:"error"}} loading={{loading:true}} 
        getProfiles={mockFn} updateProfile={mockFn}/>
        );
      wrapper.instance().openModal();
    });

    it('should edit profile',
    () => {
        const wrapper = shallow(<App profile={{name:"wali"}} errors={{error:"error"}} loading={{loading:true}} 
        getProfiles={mockFn} updateProfile={mockFn}/>
        );
        const event ={
            preventDefault: mockFn,
            target:{value:''}
        }
      wrapper.instance().editProfile(event);
    });

    it('should close',
    () => {
        const wrapper = shallow(<App profile={{name:"wali"}} errors={{error:"error"}} loading={{loading:true}} 
        getProfiles={mockFn} updateProfile={mockFn}/>
        );
      wrapper.instance().close();
    });

    it('should match state to props', () => {
        const defualtState ={
          login: {
          token:"dd",
          errors: "error",
          isSuccesfull: false
        }
        };
        const initialState ={
          retrieveProfile: {
          profile: "",
          errors: "error",
          loading: false
        }
        };
        mapDispatchToProps(defualtState);
        mapStateToProps(initialState);
     });
     

});

