const express = require('express')
const app = express();
const port= 3000;

app.listen(port, ()=>console.log("Listing at Port "+ port))

app.use(express.static('public'))

// This is to limit the around of incoming data from any client. 
// I this case, it is limiting the income data to 1mb. 
app.use(express.json({limit: '1mb'})) 

app.post('/api', (req, res)=>{
    console.log("I got a request"); 
   // console.log(req.body)
    res.send({
        status: "Success", 
        lat: req.body.lat, 
        long: req.body.long,  
    })
})