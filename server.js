const express = require('express')
const app = express()
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/node-api-101',{useNewUreParser:true})


// สร้าง database schema
const Cat = mongoose.model('Cat',{name:String})

// สร้าง instance จาก model 
const kitty = new Cat({name:'JavaScript'})

// save ลง database (return เป็น Promise)
kitty.save().then(()=> console.log('meow'))


app.use(express.json())

app.get('/products',(req,res)=>{
	res.json(products)
})

app.get('/products/:id',(req,res)=>{
	const {id} = req.params
	const result = products.find(product => product.id === id)
	res.json(result)
})

app.post('/products',(req,res)=>{
	const payload = req.body
	res.json(payload)
})

app.put('/products/:id',(req,res)=>{
	const { id } = req.params
	res.json({id})
})

app.delete('/products/:id',(req,res)=>{
	const { id } = req.params
	res.json({id})
})


app.listen(9000,()=> console.log('Server run port 9000'))