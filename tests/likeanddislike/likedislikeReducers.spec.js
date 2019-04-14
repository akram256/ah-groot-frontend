import dislikeReducer from '../../src/reducers/LikeDislikeReducers'
import {LIKE_ARTICLE_SUCCESS, DISLIKE_ARTICLE_SUCCESS} from '../../src/actions/types'


describe('Like dislike article',() => {
    it('should return initial state',() =>{
        expect(dislikeReducer(undefined,{})).toEqual(
            {
           
            likes:0,
            dislikes: 0,
    
            }
        );
    }
    )

it('should update the liked with LIKE ARTICLE_SUCCESS', () => {
    expect(dislikeReducer([], { type: LIKE_ARTICLE_SUCCESS, likes: '' })).toEqual({
        likes:undefined
    });
  })
}
);
it('should update the liked with DISLIKE ARTICLE_SUCCESS', () => {
    expect(dislikeReducer([], { type: DISLIKE_ARTICLE_SUCCESS, dislikes: '' })).toEqual({
        dislikes:undefined
    });
  });

