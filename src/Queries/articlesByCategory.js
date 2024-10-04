// export const articlesByCategory = `query ($category: String!) {
//   post(where: { category: $category }) {
//     id
//     title
//     content {
//       html
//     }
//     image {
//       url
//     }
//     date
//     author
//     category
//   }
// }`;


// export const articlesByCategory =`query MyQuery {
//   post {
//     category
//     content {
//       text
//     }
//     date
//     id
//     image {
//       url
//     }
//   }
// }`

// export const articlesByCategory = `query ArticlesByCategory($category: String!) {
//   post(where: { category: $category }) {
//     id
//     title
//     author
//     date
//     category
//     image {
//       url
//     }
//     content {
//       html
//     }
//   }
// }`;

// export const articlesByCategory= `query ArticlesByCategory($category: String!) {
//   post(where: { category: $category }) {
//     id
//     title
//     author
//     date
//     category
//     image {
//       url
//     }
//     content {
//       html
//     }
//   }

export const articlesByCategory = `query articlesByCategory($category: String!) {
    post(where: { category_contains: $category }) {
      id
      title
      category
      author
      date
      image {
        url
      }
      content {
        html
      }
    }
  }`
  



