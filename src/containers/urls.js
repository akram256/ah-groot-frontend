const base = 'https://ah-backend-groot.herokuapp.com/api';
const base2 = 'http://127.0.0.1:8000/api'

const endPoints = {
  getCategories: `${base}/categories/?limit=6`,
  articles: `${base}/articles/?limit=6`,
  loginUser: `${base}/users/login/`,
  provideResetEmail:`${base}/password-reset/`,
  resetPassword:`${base}/password/reset/done/`,
  facebooklogin:`${base}/social/auth/facebook/`,
  googlelogin: `${base}/social/auth/google/`,
  allCategories: `${base}/categories/`,
  postArticle: `${base}/articles/`,
  singleArticle: `${base}/article/`,
  tags: `${base}/tags/`,
  profile : `${base}/profiles/${sessionStorage.user}/`
};

export const authHeader = {
  headers: {
    'Authorization': 'Bearer ' + sessionStorage.token
  }
};	

export default endPoints;
