export const servicesQuery = `query MyQuery {
    services {
      edges {
        node {
          ServicesAcf {
            banner {
              btntext
              desc
              heading
              link
              imgurl {
                sourceUrl(size: MEDIUM)
                srcSet(size: MEDIUM)
              }
            }
            contactdata {
              btntext
              desc
              h2title
              link
              imgurl {
                sourceUrl(size: MEDIUM)
                srcSet(size: MEDIUM)
              }
            }
            servicesinfo {
              desc
              heading
              paratitle
              subtitle
              variant
              imgurl {
                sourceUrl(size: LARGE)
                srcSet(size: LARGE)
              }
            }
            testimonial {
              desc
              name
            }
            threequality {
              desc
              heading
              imgurl {
                sourceUrl(size: THUMBNAIL)
              }
            }
          }
        }
      }
    }
  }
  `;
