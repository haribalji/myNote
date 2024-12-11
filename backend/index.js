const connectTOMongo=require("./db");
const express = require('express')
const path =require('path');
const dotenv = require("dotenv");

connectTOMongo();//now this function which is created in db file can used here as it was imported
const app = express()
const port = process.env.PORT ||5000
var cors = require('cors');
dotenv.config();

const corsOptions = {
  origin:'localhost:5000',
  credentials:true
}
app.use(cors(corsOptions))

app.use(express.json());//to acess the body og the request

// now  setup the  sever by creating the route to listen to the port
const _dirname=path.resolve();




app.get('/', (req, res) => {
  res.sendFile(path.resolve(_dirname,"frontend","build","index.html"));
})//from backend if we trying to hit the url it will be done



app.use("/api/auth",require("./routers/auth"))

app.use("/api/notes",require("./routers/notes"))



app.get('/api/signup', (req, res) => {
    res.send('Hello World!')
  })

  app.use(express.static(path.join(_dirname,"frontend/build")));
  app.get("*",(_,res)=>{
      res.sendFile(path.resolve(_dirname,"frontend","build","index.html"))
  });
    
  
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
