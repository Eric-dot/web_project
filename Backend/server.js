const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const axios = require('axios')

const app = express();
app.all('*', function (req, res, next) {
    // res.header('Access-Control-Allow-Origin','http://localhost:3000'); // 允许某个地址
    res.header('Access-Control-Allow-Origin', '*') //当允许携带cookies此处的白名单不能写’*’
    res.header(
        'Access-Control-Allow-Headers',
        'content-type,Content-Length, Authorization,Origin,Accept,X-Requested-With'
    ) // 允许的请求头
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT') // 允许的请求方法
    res.header('Access-Control-Allow-Credentials', true) // 允许携带cookies
    next()
})

app.set("view engine", "ejs")

app.use('/search', async (req, res) => {
    const apiRes = await axios({
        url: `https://api.yelp.com/v3/businesses/search`,
        params: req.query,
        headers: {
            Authorization: req.headers.Authorization,
        },
    })
    res.json(apiRes.data)
})

// app.get("/",(req,res)=>{
//     console.log("Hi")
//     res.render("index")
// })
app.listen(8080);
