import mongoose from 'mongoose'
import {
    Yjl,
    Team,
    Activity,
    Research,
    Product,
    Invite
} from './model'

let options = {
    user : 'root',
    pass : 'yangdongnan',
    authSource : 'admin', //身份验证
    auto_reconnect : true,
    autoIndex : false,
    useNewUrlParser: true  //新的url解析器
  };
  mongoose.connect('mongodb://127.0.0.1:27017/manage', options);
  
  const db = mongoose.connection;

const DateStart = Date.now();

db.on('error', function () {
  console.log('数据库连接失败')
});
db.on('open', function () {
  console.log('连接成功，数据库连接用时：' + (Date.now() - DateStart) / 1000 + 's');
});

/*******************************************************************************/

const Models = {
  /* manage */
  yjl : Yjl,
  team : Team,
  activity : Activity,
  research : Research,
  product : Product,
  invite : Invite
};

export default Models;