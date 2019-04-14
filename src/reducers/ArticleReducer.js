export const articleReducer = (state = [], action) => {
  switch (action.type) {
    case 'ARTICLES':
      return  action.articles
    default:
      return state;
  }
};

export const  userArticleReducer = (state = [], action) => {
  switch (action.type) {
    case 'USER_ARTICLES':
      return  action.articles
    default:
      return state;
  }
};

export const  allUserArticles = (state = [], action) => {
  switch (action.type) {
    case 'ALL_ARTICLES':
      return  action.articles
    default:
      return state;
  }
};


export const  postArticle = (state = [], action) => {
  switch (action.type) {
    case 'POST_ARTICLE':
      return  action.article
    default:
      return state;
  }
};


export const  publishedArticles = (state = [], action) => {
  switch (action.type) {
    case 'PUBLISHED_ARTICLES':
      return  action.articles
    default:
      return state;
  }
};

export const  updatedArticle = (state = [], action) => {
  switch (action.type) {
    case 'ARTICLE_UPDATE':
      return  action.article
    default:
      return state;
  }
};

export const  singleUserArticle = (state = {}, action) => {
  switch (action.type) {
    case 'EDIT_ARTICLE':
      return  action.article
    default:
      return state;
  }
};



