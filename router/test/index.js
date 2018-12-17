// var express = require('express');
// var url = require('url');
import express from 'express'
import url from 'url'

var router = express.Router();
router.get('/', (req, res, next) => {
    console.log(req.query)
    res.json({
        message: '您正在连接 node-express web 服务'
    })
})

router.get('/cs', (req, res, next) => {
    console.log(req.query,req)
    res.json({
        message: 'cs express router api is success'
    })
})

export default router