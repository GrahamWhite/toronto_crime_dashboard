const rss_parser = require('rss-parser');
const {getAddressGeo} = require("./geocoding");

const RSS_URL = `http://www.torontopolice.on.ca/newsreleases/rss.php`;



exports.GetRawData = async function (req, res){

    let parser = new rss_parser();
    let feed = await parser.parseURL(RSS_URL);

    let master = [];
    feed.items.forEach(item => {
        //console.log(item);
        master.push(getAddressGeo(item.title));
    });

    return master;

}