var fs=require('fs')
fs.readFile('./text.txt',{'encoding':'utf8'},function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})
console.log('evevt driver')