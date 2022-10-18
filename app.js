const express = require('express');
const app = express();

app.use(express.json());

app.get("/teste",(req,res)=>{
  console.log(req);
  res.status(200).json({status: "Success"})
})

app.post("/testep",(req,res)=>{
  console.log(req.headers)
  res.status(200).json({status: "Success"})
})

app.listen(3000,()=>{
  console.log("running on port: "+3000);
});