import expressWs from 'express-ws';

let exWs = (app,server) =>{
    let me = expressWs(app,server);
    // console.log(me)
    app.ws('/', (ws, req)=>{
        // console.log('scoket请求来自 -- ip：'+ req.headers['origin'] + req.headers['user-agent'] +' 时间： '+ req._startTime)
        // console.log(ws._socket._peername)
        ws.send('111')
        ws.send('222')
        ws.send('333')

    })
}

export default exWs