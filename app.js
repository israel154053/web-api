const express = require('express');
const app = express();
const productRouter = require('./api/v1/router/product');
const morgan = require('morgan');
const secure = require('./api/v1/middlewars/secure');
const myLogger = require('./api/v1/middlewars/logger');
let arrip = ['127.0.0.1','::1','127.32.65.112'];

app.use(express.json());
app.use(secure);
app.use(myLogger);
app.use(express.urlencoded({
    extended:false
}));





app.use('/product',productRouter);


app.all('*',(req,res)=>{
    res.status(404).json({msg:'404 not found'})
});













module.export = app;