module.exports = {
  devServer: {
    // host: "localhost",
    // PEC:
    // FYI: Added the following config to fix this (none fatal) console error:
    // "GET http://192.168.178.21:8080/sockjs-node/info?t=1643969965906 net::ERR_CONNECTION_REFUSED"
    // proxy: "http://localhost:8080",
    public: "192.168.178.21:8080",

    //
    // EDIT: To fix CORS Error in development we now go with this strategy here:
    // (Original Error: "Access to XMLHttpRequest at 'https://swapi.dev/api/planets/?search=na' from origin 'http://localhost:8080' has been blocked by CORS policy:")
    proxy: "https://swapi.dev/api/",
  },
};
