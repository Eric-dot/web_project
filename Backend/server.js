const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

const axios = require('axios')
const cors = require('cors')

const app = express()

// 处理跨域
app.use(cors())

app.use('/search', async (req, res) => {
  // console.log(req.header('Authorization'))
  const apiRes = await axios({
    url: `https://api.yelp.com/v3/businesses/search`,
    params: req.query,
    headers: {
      Authorization: req.header('Authorization'),
    },
  })
  res.json(apiRes.data)
})

app.listen(8080)
