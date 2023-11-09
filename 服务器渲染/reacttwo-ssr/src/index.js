// require('@babel/register')({
//     presets: ['@babel/preset-react','@babel/preset-env']
//   }); 
global.React = require('react');
const express=require('express')
const app=express()

app.use(express.static('public'))
// const {renderToString}=require('react-dom/server')
// const HelloRReactSSR=require('./components/HelloSSR')

app.get('/',(req,res)=>{
    // const SSr=helloRReactSSR
    // res.send('/ 接口') ${str}
    // const str=renderToString(<HelloRReactSSR/>)
     res.send(`<!DOCTYPE html>
                <html>
                    <head>
                        <meta charset='UTF-8'>
                        <title></title>
                    </head>
                    <body>
                        <div id='root>
                            <div onClick=()={alert('hhh')}>btn</div>
                            <script src='./index.js'></script>
                        </div>
                    </body>
                </html>
    `)
})

app.listen(8000,()=>{
    console.log('server at 8000')
})