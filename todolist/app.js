var express = require('express')
var app= express()
var bodyParser=require('body-parser')
var todoItems=[
    {id:0,value:'react',done:false,delete:false}
]


app.use(bodyParser.json())

app.all('*',function(req,res,next){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Headers','content-type')
    res.header('Access-Control-Allow-Methods','DELETE.PUT,POST,GET,OPTIONS')
    next()
})
app.get('/items',function(req,res){

    res.send(todoItems)
})
app.post('/items',function(req,res){
    console.log(res,'res==')
    if(req.body.todoItem){
        todoItems=[...todoItems,req.body.todoItem]
    }
    res.send(todoItems)
})
app.delete('/items',function(req,res){
    console.log('ddddd')
    console.log(req.body)
    // if(req.body.id){
    //     // todoItem.forEach(item=>{
    //     //     if(item.id===req.body.id){
    //     //         item.delete=true
    //     //     }
    //     // })
    //     const todoItems=todoItems.filter(item=>item.id!=req.body.id)
    // }
    res.send(todoItems)
})
app.listen(8000,function(){
    console.log('serve run at http://127.0.0.1:80')
})


