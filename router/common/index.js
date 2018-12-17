import express from 'express'
import multer from 'multer'
import fs from 'fs'
import {Ip,prot} from '../../config'

let router = express.Router()
let upload = multer()

router.post('/api/update-image/', upload.single('file'), (req,res,next) =>{
    // console.log(req.file)    
    let filename = Math.random().toString().substring(2) + req.file.originalname;
    let filebuffer = req.file.buffer;
    fs.writeFile('public/image/' + filename, filebuffer, ( err ) => {
        if ( err ) {
          let data = {
              code: 0,
              error: '图片上传失败'
          }
          res.json(data)
        } else {
          let data = {
              code: 1,
              img_url:'http://' + Ip + ':3000' +'/public/image/' + filename
          }   
          return res.json(data)
        }
      });
})

export default router