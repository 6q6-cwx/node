
// require('@babel/register')({
//     presets: ['@babel/preset-react']
//   });

const React = require('react')
// import React from 'react'

// class HelloSSR extends React.Component{
//     render(){
//         return(<>hello react</>)
//     }
// }

const HelloSSR=()=>{
    return(
        <div>
            <div>ssr react !!!</div>
        </div>
    )
}

export default HelloSSR