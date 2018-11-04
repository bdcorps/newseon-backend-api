var categoriesJSON = {
  categories: [
    {
      id: "topheadlines",
      title: "Top Headlines",
      playlists: [
        {
          type: "topHeadlines",
          query: {
            category: "business",
            country: "us",
            pageSize: 10
          }
        },
        {
          type: "dailyNews",
          query: {
            q: "technology",
            language: "en",
            sortBy: "popularity",
            pageSize: 10
          }
        },
        {
          type: "sources",
          query: {
            category: "sports",
            language: "en",
            pageSize: 10
          }
        },
        {
          type: "sources",
          query: {
            category: "health",
            language: "en",
            pageSize: 10
          }
        },
        {
          type: "sources",
          query: {
            category: "entertainment",
            language: "en",
            pageSize: 10
          }
        }
      ]
    }
  ]
};

module.exports = categoriesJSON;

// var categoriesJSON = {
//     categories: [{
//         id: "topheadlines",
//         title: "Top Headlines",
//         playlists: [{
//             type: "topHeadlines",
//             query: {
//                 q: 'bitcoin',
//                 language: 'en',
//                 'pageSize': 10
//             }
//         },
//         {
//             type: "topHeadlines",
//             query: {
//                 category: 'business',
//                 language: 'en',
//                 'pageSize': 10
//             }
//         }
//         ]
//     },
//     {
//         id: "dailynews",
//         title: "Daily News",
//         playlists: [{
//             type: "topHeadlines",
//             query: {
//                 sources: 'bbc-news,the-verge',
//                 q: 'bitcoin',
//                 language: 'en',
//                 'pageSize': 10
//             }
//         },
//         {
//             type: "topHeadlines",
//             query: {
//                 category: 'business',
//                 language: 'en',
//                 'pageSize': 10
//             }
//         }
//         ]
//     }

//     ]
// }

// module.exports = categoriesJSON;
