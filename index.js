const express = require('express')
const app = express()
const port = 3000
const UserRouter = require('./router/UserRouter')
const ProductRouter = require('./router/ProductRoutes')
require('./connect/db')


app.use(express.json())
app.use('/user', UserRouter)
app.use('/product', ProductRouter)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})