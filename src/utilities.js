"use strict";

const urlParse = require('url').parse;
const slug = require('slug');
const path = require('path');

module.exports.urlToFilename = function urlToFilename(url) {
  const parsedUrl = urlParse(url);
  console.log(parsedUrl)
  const urlPath = parsedUrl.path.split('/')
    .filter(function(component) {
      return component !== '';
    })
    .map(function(component) {
      return slug(component);
    })
    .join('/');
  console.log(urlPath)
  let filename = path.join(parsedUrl.hostname, urlPath);
  if(!path.extname(filename).match(/htm/)) {
    filename += '.html';
  }
  return filename;
};