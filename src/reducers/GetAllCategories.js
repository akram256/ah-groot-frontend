
const getAllCategories = (state = [], action) => {
    switch (action.type) {
      case 'ALLCATEGORIES':
        return action.allCategories;
      default:
        return state;
    }
  }

export default getAllCategories;
