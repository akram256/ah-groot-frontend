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
  tags: `${base}/tags/`,
  postComment: `${base}/articles/i-do-not-like-animals-ask-me-why/comments/`,
  getComments: `${base}/articles/i-do-not-like-animals-ask-me-why/comments/`,
  updateComment: `${base}/articles/i-do-not-like-animals-ask-me-why/comments/1/`,
  deleteComment: `${base}/articles/i-do-not-like-animals-ask-me-why/comments/`
};

export const authHeader = {
  headers: {
    'Authorization': 'Bearer ' + sessionStorage.token
  }
};

export default endPoints;
