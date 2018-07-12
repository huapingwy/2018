const express = require('express')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')

const shopModel = require('./open-shop')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.resolve(__dirname, '../dist')))

app.get('*', (req, res) => {
  const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
  res.send(html)
})

app.post('/create/shop', (req, res) => {
  console.log(req.body)

  const newshop = new shopModel({
    name: req.body.name,
    logo: req.body.logo
  })

  newshop.save((err) => {
    if (err) {
      res.json({
        code: 400032,
        data: null,
        message: '提交失败'
      })
    } else {
      res.json({
        code: 2000,
        data: req.body,
        messgae: 'success'
      })
    }
  })
})

app.listen(8081, () => {
  console.log('http://localhost:8081')
})
