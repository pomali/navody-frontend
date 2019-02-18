module.exports = (app) => {
  require('./views/full-page-examples/feedback')(app)
  require('./views/full-page-examples/how-do-you-want-to-sign-in')(app)
  require('./views/full-page-examples/news-and-communications')(app)
  require('./views/full-page-examples/passport-details')(app)
  require('./views/full-page-examples/upload-your-photo')(app)
  require('./views/full-page-examples/what-is-your-nationality')(app)
  require('./views/full-page-examples/what-is-your-postcode')(app)

  // Display full page examples index by default if not handled already
  app.get('/full-page-examples/:example', function (req, res, next) {
    res.render(`${req.params.example}/index`, function (error, html) {
      if (error) {
        next(error)
      } else {
        res.send(html)
      }
    })
  })
}