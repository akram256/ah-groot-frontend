import loginReducer from '../../src/reducers/loginReducer';

const initialState = {
    isSuccessful: false,
    token: '',
    errors: null
  };

describe('Test login reducer', ()=>{
    it('Should login', () => {
        const actionSuccess = {
            type: 'LOGIN_SUCCESS', payload: ''
        }
        expect(loginReducer(initialState,actionSuccess)).toEqual({
            isSuccessful: true,
            errors: null,
            token:""
          })
    });

    it('Should fail', () => {
        const actionFailure = {type: 'LOGIN_FAIL', payload: ''}
        expect(loginReducer(initialState,actionFailure)).toEqual({
            isSuccessful: false,
            token: '',
            errors:''
          })
    })
})
