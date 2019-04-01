import { combineReducers } from 'redux';
import getCategories from './GetCategories';
import articleReducer from './ArticleReducer';
import registrationReducer from './registrationReducer';

export default combineReducers({
  categories: getCategories,
  articles: articleReducer,
  registrationReducer,
});
