import _ from 'lodash'

function component(){
    let ele=document.createElement('div')
    // ele.innerHTML='Hello'
    ele.innerHtml=_.join(['Hellow','Webpack'],'')
    console.log('index')
    return ele
}

document.body.appendChild(component())