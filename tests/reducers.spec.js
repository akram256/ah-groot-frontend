import reducers from '../src/reducers';
import getCategories from '../src/reducers/GetCategories';
import data from '../tests/landing_page/maxios_mock';


describe("Test all reducers", () => {
  it('Given article reducer should handle ARTICLES', () => {
    expect(
      getCategories([], {
        type: 'CATEGORIES',
        categories: data.category.categorys.results
      })
    ).toEqual(
        data.category.categorys.results
    );

  });
  test('reducers return a state', () => {
    let state;
    state = reducers(
      {
        categories: [
          { name: 'Entertainment', slug: 'entertainment' },
          { name: 'Mukasa trump', slug: 'mukasa-trump' }
        ],
        articles: [],
      },
      {
        type: 'ARTICLES',
        articles: [
          {
            slug: 'kati-kait_-the-cat',
            title: 'Kati kait_ the cat',
            description: 'Cat that Chryce claims he had',
            body:
              'Take note that this article most likely applies to whatever other programming language you might be using, as these are concepts that exist in many other languages.Take note that this article most likely applies to whatever other programming language you might be using, as these are concepts that exist in many other languages.Take note that this article most likely applies to whatever other programming language you might be using, as these are concepts that exist in many other languages.Take note that this article most likely applies to whatever other programming language you might be using, as these',
            category: { name: 'Health', slug: 'health' },
            average_rating: 0,
            user_rates: '0',
            created_at: '2019-04-08T19:34:21.766920+03:00',
            updated_at: '2019-04-08T19:35:01.988784+03:00',
            favorited: false,
            favorites_count: 0,
            is_published: true,
            author: {
              full_name: '',
              bio: '',
              image: null,
              follower_count: 0,
              following_count: 0,
              timestamp: '2019-04-08T13:29:00.463973+03:00',
              favorite_articles: [],
              user: 'stanley',
            },
            tagList: ['pet', 'love', 'lies'],
            likes: 0,
            dislikes: 0,
            reading_time: '1 min read',
            read_stats: 0,
          },
          {
            slug: 'wali-is-a-bold-guy',
            title: 'wali is a bold guy',
            description: 'He talks about his guy a lot',
            body:
              'Take note that this article most likely applies to whatever other programming language you might be using, as these are concepts that exist in many other languages.Take note that this article most likely applies to whatever other programming language you might be using, as these are concepts that exist in many other languages.Take note that this article most likely applies to whatever other programming language you might be using, as these are concepts that exist in many other languages.Take note that this article most likely applies to whatever other programming language you might be using, as these',
            category: { name: 'Health', slug: 'health' },
            average_rating: 0,
            user_rates: '0',
            created_at: '2019-04-08T18:09:27.469655+03:00',
            updated_at: '2019-04-08T18:09:55.685559+03:00',
            favorited: false,
            favorites_count: 0,
            is_published: true,
            author: {
              full_name: '',
              bio: '',
              image: null,
              follower_count: 0,
              following_count: 0,
              timestamp: '2019-04-08T13:29:00.463973+03:00',
              favorite_articles: [],
              user: 'stanley',
            },
            tagList: ['rnb', 'soul', 'there'],
            likes: 0,
            dislikes: 0,
            reading_time: '1 min read',
            read_stats: 0,
          },
        ],
      }
    );
    expect(state).toEqual({
      categories: [
        { name: 'Entertainment', slug: 'entertainment' },
        { name: 'Mukasa trump', slug: 'mukasa-trump' },
      ],
      articles: [
        {
          slug: 'kati-kait_-the-cat',
          title: 'Kati kait_ the cat',
          description: 'Cat that Chryce claims he had',
          body:
            'Take note that this article most likely applies to whatever other programming language you might be using, as these are concepts that exist in many other languages.Take note that this article most likely applies to whatever other programming language you might be using, as these are concepts that exist in many other languages.Take note that this article most likely applies to whatever other programming language you might be using, as these are concepts that exist in many other languages.Take note that this article most likely applies to whatever other programming language you might be using, as these',
          category: { name: 'Health', slug: 'health' },
          average_rating: 0,
          user_rates: '0',
          created_at: '2019-04-08T19:34:21.766920+03:00',
          updated_at: '2019-04-08T19:35:01.988784+03:00',
          favorited: false,
          favorites_count: 0,
          is_published: true,
          author: {
            full_name: '',
            bio: '',
            image: null,
            follower_count: 0,
            following_count: 0,
            timestamp: '2019-04-08T13:29:00.463973+03:00',
            favorite_articles: [],
            user: 'stanley',
          },
          tagList: ['pet', 'love', 'lies'],
          likes: 0,
          dislikes: 0,
          reading_time: '1 min read',
          read_stats: 0,
        },
        {
          slug: 'wali-is-a-bold-guy',
          title: 'wali is a bold guy',
          description: 'He talks about his guy a lot',
          body:
            'Take note that this article most likely applies to whatever other programming language you might be using, as these are concepts that exist in many other languages.Take note that this article most likely applies to whatever other programming language you might be using, as these are concepts that exist in many other languages.Take note that this article most likely applies to whatever other programming language you might be using, as these are concepts that exist in many other languages.Take note that this article most likely applies to whatever other programming language you might be using, as these',
          category: { name: 'Health', slug: 'health' },
          average_rating: 0,
          user_rates: '0',
          created_at: '2019-04-08T18:09:27.469655+03:00',
          updated_at: '2019-04-08T18:09:55.685559+03:00',
          favorited: false,
          favorites_count: 0,
          is_published: true,
          author: {
            full_name: '',
            bio: '',
            image: null,
            follower_count: 0,
            following_count: 0,
            timestamp: '2019-04-08T13:29:00.463973+03:00',
            favorite_articles: [],
            user: 'stanley',
          },
          tagList: ['rnb', 'soul', 'there'],
          likes: 0,
          dislikes: 0,
          reading_time: '1 min read',
          read_stats: 0,
        },
      ],
    });
  });
});
