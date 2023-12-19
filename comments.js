// Create web server
// Usage: node comments.js
// http://localhost:8080/comments
// http://localhost:8080/comments/1
// http://localhost:8080/comments/2
// http://localhost:8080/comments/3
// http://localhost:8080/comments/4
// http://localhost:8080/comments/5
// http://localhost:8080/comments/6

// Load the http module to create an http server.
var http = require('http');

// Load the url module to parse url parameters
var url = require('url');

// Load the fs module to read files
var fs = require('fs');

// Load the path module to get the extension of a file
var path = require('path');

// Load the mime module to get the mime type of a file
var mime = require('mime');

// Load the qs module to parse query string parameters
var qs = require('qs');

// Load the comments module to get the list of comments
var comments = require('./comments');

// Load