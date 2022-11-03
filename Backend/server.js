const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

const axios = require('axios')
const cors = require('cors')

const app = express()

app.use(cors())

app.use('/search', async (req, res) => {
    const apiRes = await axios({
        url: `https://api.yelp.com/v3/businesses/search`,
        params: req.params,
        headers: {
            Authorization: req.header('Authorization'),
        },
    })
    res.json(apiRes.data)
})

// app.get("/",(req,res)=>{
//     console.log("Hi")
//     res.render("index")
// })
app.listen(8080);
