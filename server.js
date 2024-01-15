const express = require('express')
const app = express()
const PORT = 5000

app.use( express.json() )

app.get('/tshirt',(req,res) => {
    res.status(200).send({
        tshirt: 'red shirt',
        size: 'large'
    })
})

app.post('/tshirt/:id', (req,res) => {
    const { id } = req.params;
    const { logo } = req.body;
    
    if(!logo) {
        res.status(418).send({ message: 'We need a logo!' })
    }

    res.send({
        thirt: `Red Shirt with your ${logo} and ID of ${id}` 
    })
})

app.listen(
    PORT,
    () => console.log(`The server is live on port: ${PORT}` )
)