import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
//api router
import csApi from './router/test/index';
//api manage 
import manage from './router/manage/index'
//api hz
import hz from './router/hz/game'
//api socket 
// import socket from './router/socket/socket'

//api common
import common from './router/common/index'



let app = express();
let morgan = logger('dev')


app.use(morgan);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static(path.join(__dirname, 'public')));  //监听本地文件 你可以写多个监听用来保存不同的路径地址
app.use('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  // res.header("X-Powered-By",' 3.2.1')
  // res.header("Content-Type", "application/json;charset=utf-8");
  if (req.method == 'OPTIONS') {
    res.send(200)
  }else {
    next();
  }
});

//测试
app.use(csApi);
//管理接口
// app.use(manage);
//汇游本地测试接口
// app.use(hz);
//通用
app.use(common);
//socket
// app.use(socket)

export default app;
