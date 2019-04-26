import followReducer from '../../src/reducers/profile/followuserReducer';
import {FOLLOW_SUCESS, FOLLOWERLIST_SUCESS} from '../../src/actions/types';


describe('follow user',() => {
    it('should return initial state',() =>{
        expect(followReducer(undefined,{})).toEqual(
            {
           
                follow:false,
                follower:0 ,
                following:0,
                followers:[]
            
    
            }
        );
    }
    )

it('should update the user with FOLLOW_SUCESS', () => {
    expect(followReducer([], { type: FOLLOW_SUCESS, following:""})).toEqual({
        follow: true, following: undefined
    }
        
    );
  })
}
);
it('should update the user with FOLLOWERLIST_SUCESS', () => {
    expect(followReducer([], { type: FOLLOWERLIST_SUCESS, followers:[]})).toEqual({
        follow: true, following: undefined
    }
        
    );
  })