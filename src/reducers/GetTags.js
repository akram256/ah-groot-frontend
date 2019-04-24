const TagReducer = (state = [], action) => {
    switch (action.type) {
      case 'TAGS':
        return  action.tags
      default:
        return state;
    }
  };

  export default TagReducer;
