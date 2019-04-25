import TagReducer from '../../src/reducers/GetTags';
import {
  articleReducer,
  userArticleReducer,
  allUserArticles,
  postArticle,
  publishedArticles,
  updatedArticle,
  singleUserArticle,
  paginateArticles,
  firstArticles
} from '../../src/reducers/ArticleReducer';
import getAllCategories from '../../src/reducers/GetAllCategories';
import CreateArticleReducer from '../../src/reducers/CreateArticle';

describe('Article reducers ', () => {
  it('should handle TAGS', () => {
    expect(
      TagReducer([], {
        type: 'TAGS',
        tags: [],
      })
    ).toEqual([]);
  });

  it('should handle ALL CATEGORIES', () => {
    expect(
      getAllCategories([], {
        type: 'ALLCATEGORIES',
        allCategories: [],
      })
    ).toEqual([]);
  });

  it('should handle pagination', () => {
    expect(
      paginateArticles([], {
        type: 'GET_NEXT',
        articles: [],
      })
    ).toEqual([]);
  });  

  it('should handle fetch articles', () => {
    expect(
      firstArticles([], {
        type: 'ORIGINAL',
        articles: [],
      })
    ).toEqual([]);
  }); 

  it('should handle ALL ARTICLES', () => {
    expect(
      CreateArticleReducer('amazing', {
        type: 'TITLE',
        title: 'amazing',
      })
    ).toEqual({
      '0': 'a',
      '1': 'm',
      '2': 'a',
      '3': 'z',
      '4': 'i',
      '5': 'n',
      '6': 'g',
      title: 'amazing',
    });

    expect(
      CreateArticleReducer('', {
        type: 'DESCRIPTION',
        description: '',
      })
    ).toEqual({ description: '' });

    expect(
      CreateArticleReducer('', {
        type: 'CATEGORY',
        category: '',
      })
    ).toEqual({ category: '' });

    expect(
      CreateArticleReducer('', {
        type: 'BODY',
        body: '',
      })
    ).toEqual({ body: '' });

    expect(
      CreateArticleReducer([], {
        type: 'TAGSLIST',
        tags: [],
      })
    ).toEqual({ tags: [] });
  });

  it('should handle Article actions', () => {
    expect(
      articleReducer([], {
        type: 'ARTICLES',
        articles: [],
      })
    ).toEqual([]);

    expect(
      userArticleReducer([], {
        type: 'USER_ARTICLES',
        articles: [],
      })
    ).toEqual([]);

    expect(
      allUserArticles([], {
        type: 'ALL_ARTICLES',
        articles: [],
      })
    ).toEqual([]);

    expect(
      postArticle([], {
        type: 'POST_ARTICLE',
        article: [],
      })
    ).toEqual([]);

    expect(
      publishedArticles([], {
        type: 'PUBLISHED_ARTICLES',
        articles: [],
      })
    ).toEqual([]);

    expect(
      updatedArticle([], {
        type: 'ARTICLE_UPDATE',
        article: [],
      })
    ).toEqual([]);

    expect(
      updatedArticle([], {
        type: 'ARTICLE_UPDAE',
        article: [],
      })
    ).toEqual([]);

    expect(
      singleUserArticle([], {
        type: 'EDIT_ARTICLE',
        article: [],
      })
    ).toEqual([]);
  });
});
