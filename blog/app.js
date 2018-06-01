const path = require('path');
const express = require('express');
const nunjucks = require('nunjucks');
const app = express()
const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')


nunjucks.configure(path.join(__dirname, 'views'), {
  autoescape: true,
  express: app,
  noCache: false,
  watch: true
})
app.set('view engine', 'njk')

app.use('/', indexRouter)
app.use('/users', userRouter)

app.listen(3000)