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
    }
    ]
}


module.exports = categoriesJSON;