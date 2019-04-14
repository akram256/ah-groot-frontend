
export const addTags = tags => ({
    type: 'TAGSLIST',
    tags
  })

  export const setTitle = (title) => ({
    type: 'TITLE',
    title
  })

  export const setBody = (body) => ({
    type: 'BODY',
    body
  })

  export const setCategory = (category) => ({
    type: 'CATEGORY',
    category
  })

  export const setDescription = (description) => ({
    type: 'DESCRIPTION',
    description
  })
