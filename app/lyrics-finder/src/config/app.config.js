const config = {
  SEARCH_API: 'https://api.lyrics.ovh/suggest/',
  LYRICS_API: 'https://api.lyrics.ovh/v1/',
  SEARCH_DEBOUNCE_TIME: 1000,
  LYRICS_DEBOUNCE_TIME: 1000,
  ERROR_MESSAGES: {
    apiError: 'Received this error while trying to retrieve data from server',
    action: ' Please try after sometime or try some other keyword',
    NotProperRequest: 'Not sending the proper Artist/Album name to the server',
    emptyResponse: 'Lyrics for this track is currently not available...!',
  },
  HTTP_SUCCESS_CODE: 200,
  NO_RESULT_FOUND:
    'No tracks found for the keyword, Please try some other keywords',
  FILTER_CATEGORIES: [
    { id: 1, name: '#Trending', keyword: 'trending' },
    { id: 2, name: '#Recently viewed', keyword: 'recent' },
    { id: 3, name: '#Top Hits', keyword: 'hits' },
  ],
};

export default config;
