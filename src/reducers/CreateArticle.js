const initialState = {
  title: '',
  description: '',
  body: '',
  category: '',
  tags: [],
};

const CreateArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TITLE':
      return {
        ...state,
        title: action.title,
      };
    case 'DESCRIPTION':
      return {
        ...state,
        description: action.description,
      };
    case 'BODY':
      return {
        ...state,
        body: action.body,
      };
    case 'CATEGORY':
      return {
        ...state,
        category: action.category,
      };
    case 'TAGSLIST':
      return {
        ...state,
        tags: action.tags,
      };
    default:
      return state;
  }
};

export default CreateArticleReducer;
