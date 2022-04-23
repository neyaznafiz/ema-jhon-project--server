const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb')
const port = process.env.PORT || 5000


// middleware
app.use(cors())
app.use(express.json())




const uri = `mongodb+srv://${process.env.EMAJHON_USER}:${process.env.EMAJHON_PASS}@cluster0.vbiac.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const run = async() => {
    try {
        await client.connect();
        const productCollection = client.db('emaJhon').collection('product');

        app.get('/product', async(req, res) => {
            const query = {};
            const cursor = productCollection.find(query)
            const products = await cursor.toArray()
            res.send(products)
        })
    }
    finally {
        // await client.close();
    }
}

run().catch(console.dir)



app.get('/', (req, res) => {
    res.send('Ema-Jhon server')
})

app.listen(port, () => {
    console.log('Ema-Jhon server is runnning', port);
})