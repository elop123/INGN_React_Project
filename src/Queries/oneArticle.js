export const oneArticle= `query ($postId: ID!) {
    post(where: { id: $postId }) {
      id
      title
      date
      author
       image {
        url
      }
      content {
        html
      }
    
    }
  }`

  