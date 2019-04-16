const base = 'https://ah-backend-groot.herokuapp.com/api';

const endPoints = {
  getCategories: `${base}/categories/?limit=6`,
  articles: `${base}/articles/?limit=6`,
  loginUser: `${base}/users/login/`,
  getCategories:
    'https://ah-backend-groot.herokuapp.com/api/categories/?limit=6',
  articles: 'https://ah-backend-groot.herokuapp.com/api/articles/?limit=6',
  loginUser: 'https://ah-backend-groot.herokuapp.com/api/users/login/',
  provideResetEmail:
    'https://ah-backend-groot.herokuapp.com/api/password-reset/',
  resetPassword:
    'https://ah-backend-groot.herokuapp.com/api/password/reset/done/',
  facebooklogin:
    'https://ah-backend-groot.herokuapp.com/api/social/auth/facebook/',
  googlelogin: 'https://ah-backend-groot.herokuapp.com/api/social/auth/google/',
};

export default endPoints;
