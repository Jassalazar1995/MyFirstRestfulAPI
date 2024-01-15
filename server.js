const express = require('express')
const app = express()
const PORT = 5000

app.get('/tshirt',(req,res) => {
    res.status(200).send({
        tshirt: 'red shirt',
        size: 'large'
    })
})

app.listen(
    PORT,
    () => console.log(`The server is live on port: ${PORT}` )
)