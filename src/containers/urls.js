const base = 'https://ah-backend-groot.herokuapp.com/api'

const endPoints = {
getCategories: `${base}/categories/?limit=6`,
articles: `${base}/articles/?limit=6`,
loginUser: `${base}/users/login/`
};

export default endPoints;
