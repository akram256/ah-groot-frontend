import {
  bookmarks,
  bookmark,
  unbookmark,
} from '../../src/reducers/BookmarkReducer';

describe('Bookmark reducers ', () => {
  it('should handle Article actions', () => {
    expect(
      bookmarks([], {
        type: 'BOOKMARKS',
        payload: [],
      })
    ).toEqual([]);

    expect(
      bookmark([], {
        type: 'BOOKMARK',
        payload: [],
      })
    ).toEqual([]);

    expect(
      unbookmark([], {
        type: 'UN_BOOKMARK',
        payload: [],
      })
    ).toEqual([]);
  });
});
