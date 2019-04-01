import socialauthReducers from '../../src/reducers/SocialAuth/SocialAuthReducers';
import{GOOGLE_FAILURE, 
    GOOGLE_LOGIN, 
    FACEBOOK_FAILURE, 
    FACEBOOK_LOGIN} from '../../src/actions/SocialAuth/ActionTypes';


describe('Social auth Reducer',() => {
    it('should return initial state',() =>{
        expect(socialauthReducers(undefined,{})).toEqual(
            {
            isAuthenticated: false,
            facebook_login: false,
            google_login:false,
            payload: '',
            token: '', 
            }
        );
    }
    )
}
);
it('should update state if there is a GOOGLE LOGIN SUCCESS', () => {
    expect(socialauthReducers([], { type: GOOGLE_LOGIN, payload: '' })).toEqual({
      google_login: true,
      isAuthenticated: true,
      payload: '',
      token: undefined,
    });
  });

it('should update state if there is a GOOGLE LOGIN FAIURE', () => {
    expect(socialauthReducers([], { type: GOOGLE_FAILURE, payload: '' })).toEqual({
      payload: '',
    });
  });

it('should update state if there is a FACEBOOK LOGIN SUCCESS', () => {
    expect(socialauthReducers([], {
      type: FACEBOOK_LOGIN,
      payload: {
        user: {
          token: 'auth_token',
        },
      },
    })).toEqual({
      facebook_login: true,
      isAuthenticated: true,
      payload: {
        user: {
          token: 'auth_token',
        },
      },
      token: 'auth_token',
    });
  });

it('should update state if there is a FACEBOOK FAILURE', () => {
    expect(socialauthReducers([], { type: FACEBOOK_FAILURE, payload: '' })).toEqual({
      payload: '',
    });
  });
