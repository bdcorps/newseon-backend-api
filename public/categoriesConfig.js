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
          type: "dailyNews",
          query: {
            q: "sports",
            language: "en",
            sortBy: "popularity",
            pageSize: 10
          }
        },
        {
          type: "dailyNews",
          query: {
            q: "entertainment",
            language: "en",
            sortBy: "popularity",
            pageSize: 10
          }
        },
        {
          type: "dailyNews",
          query: {
            q: "health",
            language: "en",
            sortBy: "popularity",
            pageSize: 10
          }
        }
      ]
    }
  ]
};

module.exports = categoriesJSON;
