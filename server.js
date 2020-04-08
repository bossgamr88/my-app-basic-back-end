const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/node-api-101',{useNewUreParser:true})
mongoose.connection.on('error',err =>{
	console.error('MongoDB error',err)
})

// mock data  
const products = [{}]


app.use(express.json())

app.get('/products',async(req,res)=>{
	const products = await Product.find({})
	res.json(products)
})

app.get('/products/:id',async(req,res)=>{
	const {id} = req.params
	// const result = products.find(product => product.id === id)
	// res.json(result)
	const product = await Product.findById(id)
	res.json(product)
})

app.post('/products',async (req,res)=>{
	const payload = req.body
	const product = new Product(payload)
	await product.save()
	res.status(201).end()
	// res.json(payload)
})

app.put('/products/:id',async(req,res)=>{
	const payload = req.body
	const { id } = req.params
	// res.json({id})
	const product = await Product.findByIdAndUpdate(id,{$set:payload})
	res.json(product)
})

app.delete('/products/:id',async(req,res)=>{
	const { id } = req.params
	// res.json({id})
	await Product.findByIdAndDelete(id)
	res.status(204).end()
})


app.listen(9000,()=> console.log('Server run port 9000'))