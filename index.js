const express = require('express')
const app = express()
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb')
const port = process.env.PORT || 5000


// middleware
app.use(cors())
app.use(express.json())




const uri = `mongodb+srv://${process.env.EMAJHON_USER}:${process.env.EMAJHON_PASS}@cluster0.vbiac.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const run = async()=>{
try{

}
finally{
    
}
}

run().catch(console.dir)



app.get('/', (req,res)=>{
    res.send('Ema-Jhon server')
})

app.listen(port, ()=>{
    console.log('Ema-Jhon server is runnning', port);
})