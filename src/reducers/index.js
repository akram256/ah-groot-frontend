import { combineReducers } from 'redux';

import getCategories from './GetCategories';
import registrationReducer from './registrationReducer';
import loginReducer from './loginReducer';
import socialauthReducer from './SocialAuth/SocialAuthReducers'
import getAllCategories from './GetAllCategories';
import TagReducer from './GetTags';
import { articleReducer, userArticleReducer, publishedArticles,
  singleUserArticle , allUserArticles, postArticle
} from './ArticleReducer';
import CreateArticleReducer from './CreateArticle';
import ratingReducer from './ratingReducer'



export default combineReducers({
  categories: getCategories,
  articles: articleReducer,
  registrationReducer,
  login: loginReducer,
  socialauthReducer,
  allCategories: getAllCategories,
  tags: TagReducer,
  newArticle: CreateArticleReducer,
  userArticles: userArticleReducer,
  editArticle: singleUserArticle,
  allArticles: allUserArticles,
  recentArticlePost: postArticle,
  publishedArticles: publishedArticles,
  ratingReducer
});
