import { combineReducers } from 'redux';

import getCategories from './GetCategories';
import articleReducer from './ArticleReducer';
import registrationReducer from './registrationReducer';
import loginReducer from './loginReducer';
import socialauthReducer from './SocialAuth/SocialAuthReducers'


export default combineReducers({
  categories: getCategories,
  articles: articleReducer,
  registrationReducer,
  login: loginReducer,
  socialauthReducer,
});
