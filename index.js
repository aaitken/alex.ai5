var Metalsmith  = require('metalsmith');
var serve       = require('metalsmith-serve');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');

Metalsmith(__dirname)
  .metadata({
    title: "My Static Site & Blog",
    description: "It's about saying »Hello« to the World.",
    generator: "Metalsmith",
    url: "http://www.metalsmith.io/"
  })
  .source('./src')
  .destination('./out')
  .clean(false)
  .use(markdown())
  // .use(permalinks())
  .use(layouts({
    engine: 'handlebars'
  }))
  .use(serve({
    port: 8081,
    verbose: true,
    http_error_files: {
      404: "/404.html"
    },
    redirects: {
      'old': 'new'
    }
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
