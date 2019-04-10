import { combineReducers } from 'redux';
import getCategories from './GetCategories';
import articleReducer from './ArticleReducer';


export default combineReducers({
  categories: getCategories,
  articles: articleReducer
});
