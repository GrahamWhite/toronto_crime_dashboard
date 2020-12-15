

const rss_parser = require('rss-parser');
const geo = require('./geocoding');
const {getAddressGeo} = require("./geocoding");
const RSS_URL = `http://www.torontopolice.on.ca/newsreleases/rss.php`;

const fetch = require('node-fetch');


exports.GetRawData = async function(req, res) {

    let parser = new rss_parser();
    let feed = await parser.parseURL(RSS_URL);


    return feed.items.forEach(item => {

        let address = {};
         getAddressGeo(item.title).then(part => {

            console.log(part);
        })


    });













}