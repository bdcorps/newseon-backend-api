var categoriesJSON = {
    categories: [{
        id: "topheadlines",
        title: "Top Headlines",
        playlists: [{
            type: "topHeadlines",
            query: {
                q: 'bitcoin',
                language: 'en',
                'pageSize': 10
            }
        }
        ]
    },
    {
        id: "topheadlines2",
        title: "Top Headlines",
        playlists: [{
            type: "topHeadlines",
            query: {
                q: 'trump',
                language: 'en',
                'pageSize': 10
            }
        }
        ]
    }
    ]
}

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