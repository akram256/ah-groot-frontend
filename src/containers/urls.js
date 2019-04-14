const base = 'https://ah-backend-groot.herokuapp.com/api';

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
  tags: `${base}/tags/`
  // token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJzdGFubGV5QGdtYWlsLmNvbSIsImV4cCI6MTU1NzE2MTg0OX0.4CbvdVeEtXD11DoPnVe1HI44SousNaZzJYMr8KsPoIE',
};

export const authHeader = {
  headers: {
    'Authorization': 'Bearer ' + sessionStorage.token
  }
};

export default endPoints;
