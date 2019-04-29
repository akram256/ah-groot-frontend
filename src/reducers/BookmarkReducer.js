export const bookmarks = (state = [], action) => {
    switch (action.type) {
      case 'BOOKMARKS':
        return  action.payload
      default:
        return state;
    }
  };

export const bookmark = (state = {}, action) => {
    switch (action.type) {
      case 'BOOKMARK':
        return  action.payload
      default:
        return state;
    }
  };

export const unbookmark = (state = {}, action) => {
    switch (action.type) {
      case 'UN_BOOKMARK':
        return  action.payload
      default:
        return state;
    }
  };
