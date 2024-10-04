export const myArticles = `query MyQuery {
    post {
      id
      title
      author
      date
      category
      image {
        url
      }
      content {
        html
      }
    }
  }`;
