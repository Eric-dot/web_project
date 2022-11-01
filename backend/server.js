const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(express.static("public"))
app.set("view engine", "ejs")
app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://www.example.org/secret',
    changeOrigin: true,
  })
);

app.get("/",(req,res)=>{
    console.log("Hi")
    res.render("index")
})
app.listen(3000); 