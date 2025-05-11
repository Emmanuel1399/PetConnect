const contentful = require('contentful');

const constentfulClient = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: process.env.CONTENTFUL_EVIROMENT,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

module.exports = constentfulClient;