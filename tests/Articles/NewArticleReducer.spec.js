
import { addTags, setTitle, setBody, setCategory, setDescription} from '../../src/actions/NewArticle';


describe('New Article reducers ', () => {
  it('should handle TAGS', () => {
    expect(
        addTags([], {
        type: 'TAGSLIST',
        tags: [],
      })
    ).toEqual({"tags": [], "type": "TAGSLIST"});
  });

  it('should handle TITLE', () => {
    expect(
        setTitle('', {
        type: 'TITLE',
        title: '',
      })
    ).toEqual( {"title": "", "type": "TITLE"});
  });

  it('should handle BODY', () => {
    expect(
        setBody('', {
        type: 'BODY',
        body: '',
      })
    ).toEqual( {"body": "", "type": "BODY"});
  });

  it('should handle CATEGORY', () => {
    expect(
        setCategory({}, {
        type: 'CATEGORY',
        category: '',
      })
    ).toEqual( {"category": {}, "type": "CATEGORY"});
  });

  it('should handle DESCRIPTION', () => {
    expect(
        setDescription('', {
        type: 'DESCRIPTION',
        description: '',
      })
    ).toEqual( {"description": "", "type": "DESCRIPTION"});
  });

});