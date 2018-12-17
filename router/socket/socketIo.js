import io from 'socket.io'

let init = (server) =>{
    let socket = io(server);

    socket.on('connection' , (sockets)=>{
        console.log('有客户端建立连接- 地址'+ sockets.handshake.headers.origin , '类型:'+ sockets.handshake.headers['user-agent']);
        // console.log(sockets)
        // setInterval(() => {
        //     socket.emit('message', '持续推送连接 每 2000ms')
        // }, 2000);
        sockets.on('message',(data)=>{
            console.log(data);
            // setTimeout(()=>{
            //     socket.emit('message', '111')
            // },3000)
        })
    })
}
export default init