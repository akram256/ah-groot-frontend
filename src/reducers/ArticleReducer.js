const articleReducer = (state = [], action) => {
  switch (action.type) {
    case 'ARTICLES':
      return  action.articles
    default:
      return state;
  }
};

export default articleReducer;
