const express = require('express')
const app = express()
const {products} =require('./data')

app.get('/', (req, res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
    const newProduct = products.map((product) => {
        const {id,name,image} = product
        return {id, name, image}
    })
    res.json(newProduct)
})

app.get('/api/products/:productID',(req, res) => {
    const {productID} = req.params;
    const singleProduct = products.find((product)=> product.id === Number(productID))
    if(!singleProduct){
        res.status(404).send('Product does not exist')
    }
    res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID',(req, res) => {
    console.log(req.params)
    res.send('hello world')
})

app.get('/api/v1/query',(req, res) => { //query?name=mazen&id=1
    //console.log(req.query)
    const {search, limit } = req.query
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter((product)=> {
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    res.json(sortedProducts)
    //res.send('hello world')
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000..')
})