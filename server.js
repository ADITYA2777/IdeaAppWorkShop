const express = require ('express')
const configServer =require('./config/configserveruser.js')
const app = express()


app.listen(configServer.PORT,()=>{
    console.log(`server starte on the port number localhost:${configServer.PORT}`);
})