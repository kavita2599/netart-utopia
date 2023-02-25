export const TeamData = `query MyQuery {
    teams {
      nodes {
        TeamMembers {
          teammembers {
            linkedin
            name
            position
            image {
              sourceUrl(size: MEDIUM)
              srcSet(size: MEDIUM)
            }
          }
        }
      }
    }
  }
  `