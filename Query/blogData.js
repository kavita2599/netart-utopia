export const blogQuery = `query MyQuery {
  posts {
    nodes {
      blog_data {
        content
        heading
        date
      }
      featuredImage {
        node {
          sourceUrl(size: LARGE)
        }
      }
      slug
    }
  }
}
`;

export const blogPageQuery = `query MyQuery($URL: ID!) {
  post(id: $URL, idType: SLUG) {
    blog_data {
      content
      heading
      date
      readingmin
    }
    seo {
      canonical
      title
      metaDesc
      opengraphUrl
    }
    slug
    featuredImage {
      node {
        sourceUrl(size: _2048X2048)
      }
    }
  }
}`;
