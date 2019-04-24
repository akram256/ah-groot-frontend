import reducers from '../src/reducers';
import getCategories from '../src/reducers/GetCategories';
import data from './landing_page/maxios_mock';
import ratingReducer from '../src/reducers/ratingReducer';

describe('Test all reducers', () => {
  it('Given article reducer should handle ARTICLES', () => {
    expect(
      getCategories([], {
        type: 'CATEGORIES',
        categories: data.category.categorys.results,
      })
    ).toEqual(data.category.categorys.results);
  });


  test('reducers', () => {
    let state;
    state = reducers({categories:[],articles:[],registrationReducer:{error:null,successMsg:null,loading:false},login:{isSuccessful:false,token:'',errors:null},socialauthReducer:{isAuthenticated:false,facebook_login:false,google_login:false,payload:'',token:''},allCategories:[],tags:[],newArticle:{title:'',description:'',body:'',category:'',tags:[]},userArticles:[{slug:'how-to-train-a-dragon',title:'how to train a dragon',description:'xxx',body:'<p>xxxx</p>',category:{name:'health',slug:'health'},average_rating:4,user_rates:'0',created_at:'2019-04-23T10:54:04.663217+03:00',updated_at:'2019-04-23T10:54:07.135585+03:00',favorited:false,favorites_count:0,is_published:true,author:{full_name:'walimike',bio:'this is it',image:'https://firebasestorage.googleapis.com/v0/b/authors-heaven-groot.appspot.com/o/images%2FPhoto%20on%2016-02-2019%20at%2011.09.jpg?alt=media&token=5efd509f-80ee-448f-93af-a937981bf644',follower_count:0,following_count:0,timestamp:'2019-04-22T08:29:22.208140+03:00',favorite_articles:[],user:'walimike'},tagList:['tags'],likes:0,dislikes:0,reading_time:'1 min read',read_stats:16}],editArticle:{},allArticles:[],recentArticlePost:[],publishedArticles:[],comments:{commentPosted:false,commentUpdated:false,commentDeleted:false,comments:[]},dislikeReducer:{likes:0,dislikes:0},retrieveProfile:{profile:{},loading:false}}, {type:'PUBLISHED_ARTICLES',articles:[{slug:'how-to-train-a-dragon',title:'how to train a dragon',description:'xxx',body:'<p>xxxx</p>',category:{name:'health',slug:'health'},average_rating:4,user_rates:'0',created_at:'2019-04-23T10:54:04.663217+03:00',updated_at:'2019-04-23T10:54:07.135585+03:00',favorited:false,favorites_count:0,is_published:true,author:{full_name:'walimike',bio:'this is it',image:'https://firebasestorage.googleapis.com/v0/b/authors-heaven-groot.appspot.com/o/images%2FPhoto%20on%2016-02-2019%20at%2011.09.jpg?alt=media&token=5efd509f-80ee-448f-93af-a937981bf644',follower_count:0,following_count:0,timestamp:'2019-04-22T08:29:22.208140+03:00',favorite_articles:[],user:'walimike'},tagList:['tags'],likes:0,dislikes:0,reading_time:'1 min read',read_stats:16}]});
    expect(state).toEqual({categories:[],articles:[],registrationReducer:{error:null,successMsg:null,loading:false},login:{isSuccessful:false,token:'',errors:null},socialauthReducer:{isAuthenticated:false,facebook_login:false,google_login:false,payload:'',token:''},allCategories:[],tags:[],newArticle:{title:'',description:'',body:'',category:'',tags:[]},userArticles:[{slug:'how-to-train-a-dragon',title:'how to train a dragon',description:'xxx',body:'<p>xxxx</p>',category:{name:'health',slug:'health'},average_rating:4,user_rates:'0',created_at:'2019-04-23T10:54:04.663217+03:00',updated_at:'2019-04-23T10:54:07.135585+03:00',favorited:false,favorites_count:0,is_published:true,author:{full_name:'walimike',bio:'this is it',image:'https://firebasestorage.googleapis.com/v0/b/authors-heaven-groot.appspot.com/o/images%2FPhoto%20on%2016-02-2019%20at%2011.09.jpg?alt=media&token=5efd509f-80ee-448f-93af-a937981bf644',follower_count:0,following_count:0,timestamp:'2019-04-22T08:29:22.208140+03:00',favorite_articles:[],user:'walimike'},tagList:['tags'],likes:0,dislikes:0,reading_time:'1 min read',read_stats:16}],editArticle:{},allArticles:[],recentArticlePost:[],publishedArticles:[{slug:'how-to-train-a-dragon',title:'how to train a dragon',description:'xxx',body:'<p>xxxx</p>',category:{name:'health',slug:'health'},average_rating:4,user_rates:'0',created_at:'2019-04-23T10:54:04.663217+03:00',updated_at:'2019-04-23T10:54:07.135585+03:00',favorited:false,favorites_count:0,is_published:true,author:{full_name:'walimike',bio:'this is it',image:'https://firebasestorage.googleapis.com/v0/b/authors-heaven-groot.appspot.com/o/images%2FPhoto%20on%2016-02-2019%20at%2011.09.jpg?alt=media&token=5efd509f-80ee-448f-93af-a937981bf644',follower_count:0,following_count:0,timestamp:'2019-04-22T08:29:22.208140+03:00',favorite_articles:[],user:'walimike'},tagList:['tags'],likes:0,dislikes:0,reading_time:'1 min read',read_stats:16}],comments:{commentPosted:false,commentUpdated:false,commentDeleted:false,comments:[]},dislikeReducer:{likes:0,dislikes:0},retrieveProfile:{profile:{},loading:false}, ratingReducer:{error:null,loading:false, successMsg:null}, reportingReducer:{error:null,loading:false, successMsg:null}});
  });
  

});

