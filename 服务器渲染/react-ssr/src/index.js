const express = require('express')
const app=express()
const React = require('react')
const {renderToString}=require('react-dom/server')

app.get('/',(req,res)=>{
    // hellossr
    res.send('Hello SSR')
    // res.send(`<!DOCTYPE html>
    // <html>
    //   <head>
    //    <meta charset='UTF-8'>
    //    <title></title>
    //   </head>
    //   <body>
    //      <div id='root>hhhh</div>
    //   </body>
    // </html>
    
    // `)
})

app.listen(7000,()=>{
    console.log('server at 3000')
})