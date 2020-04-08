const express = require('express')
const app = express()

app.get('/hello/:message',(req,res)=>{
	const {params} = req
	res.json({message:'Mange!!',params}) 
	//http://localhost:9000/hello/this-is-message
	//http://localhost:9000/hello/pakawat
})

app.listen(9000,()=> console.log('Server run port 9000'))