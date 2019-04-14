import reducers from '../src/reducers';
import getCategories from '../src/reducers/GetCategories';
import data from './landing_page/maxios_mock';

describe('Test all reducers', () => {
  it('Given article reducer should handle ARTICLES', () => {
    expect(
      getCategories([], {
        type: 'CATEGORIES',
        categories: data.category.categorys.results,
      })
    ).toEqual(data.category.categorys.results);
  });

  test('reducers', () => {
    let state;
    state = reducers(
      {
        categories: [],
        articles: [],
        registrationReducer: { error: null, successMsg: null, loading: false },
        login: { isSuccessful: false, token: '', errors: null },
        socialauthReducer: {
          isAuthenticated: false,
          facebook_login: false,
          google_login: false,
          payload: '',
          token: '',
        },
        allCategories: [
          { name: 'small', slug: 'small' },
          { name: 'big', slug: 'big' },
          { name: 'bigger', slug: 'bigger' },
          { name: 'biggest', slug: 'biggest' },
        ],
        tags: ['ss'],
        newArticle: {
          title: '',
          description: '',
          body: '',
          category: '',
          tags: [],
        },
        userArticles: [],
        editArticle: {
          slug: 'today-in-history',
          title: 'today in history',
          description: 'today js',
          body: '<p>aaaaaa</p>',
          category: { name: 'bigger', slug: 'bigger' },
          average_rating: 0,
          user_rates: '0',
          created_at: '2019-04-18T00:19:35.275221+03:00',
          updated_at: '2019-04-18T00:19:38.486428+03:00',
          favorited: false,
          favorites_count: 0,
          is_published: true,
          author: {
            full_name: '',
            bio: '',
            image: '',
            follower_count: 0,
            following_count: 0,
            timestamp: '2019-04-18T00:14:27.484022+03:00',
            favorite_articles: [],
            user: 'stanley',
          },
          tagList: ['ss'],
          likes: 0,
          dislikes: 1,
          reading_time: '1 min read',
          read_stats: 194,
        },
        allArticles: [],
        recentArticlePost: [],
        publishedArticles: [],
      },
      { type: 'BODY', body: '<p>aaaaaa</p>' }
    );
    expect(state).toEqual({
      categories: [],
      articles: [],
      registrationReducer: { error: null, successMsg: null, loading: false },
      login: { isSuccessful: false, token: '', errors: null },
      socialauthReducer: {
        isAuthenticated: false,
        facebook_login: false,
        google_login: false,
        payload: '',
        token: '',
      },
      allCategories: [
        { name: 'small', slug: 'small' },
        { name: 'big', slug: 'big' },
        { name: 'bigger', slug: 'bigger' },
        { name: 'biggest', slug: 'biggest' },
      ],
      tags: ['ss'],
      newArticle: {
        title: '',
        description: '',
        body: '<p>aaaaaa</p>',
        category: '',
        tags: [],
      },
      userArticles: [],
      editArticle: {
        slug: 'today-in-history',
        title: 'today in history',
        description: 'today js',
        body: '<p>aaaaaa</p>',
        category: { name: 'bigger', slug: 'bigger' },
        average_rating: 0,
        user_rates: '0',
        created_at: '2019-04-18T00:19:35.275221+03:00',
        updated_at: '2019-04-18T00:19:38.486428+03:00',
        favorited: false,
        favorites_count: 0,
        is_published: true,
        author: {
          full_name: '',
          bio: '',
          image: '',
          follower_count: 0,
          following_count: 0,
          timestamp: '2019-04-18T00:14:27.484022+03:00',
          favorite_articles: [],
          user: 'stanley',
        },
        tagList: ['ss'],
        likes: 0,
        dislikes: 1,
        reading_time: '1 min read',
        read_stats: 194,
      },
      allArticles: [],
      recentArticlePost: [],
      publishedArticles: [],
    });
  });
});
