require('dotenv').config();
const Discord = require('discord.js');
const fetch = require('node-fetch');

function createTenorUrl(keywords) {
  const params = {
    "q": keywords,
    "key": process.env.TENOR_TOKEN,
    "limit": 10
  }
  const url = new URL("https://g.tenor.com/v1/search");
  url.search = new URLSearchParams(params).toString();
  return url;
}

async function getTenorGif(keywords) {
  const url = createTenorUrl(keywords);
  const response = await fetch(url);
  const json = await response.json();
  const results = json.results;
  const index = Math.floor(Math.random() * results.length);
  return results[index].url;
}

module.exports = async function (message, args) {
  let keywords = "hello";
  if (args.length > 0) {
    keywords = args.join(' ');
  }
  const gifUrl = await getTenorGif(keywords);
  message.channel.send(gifUrl);
}