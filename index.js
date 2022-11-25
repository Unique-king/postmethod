const express=require("express")
const app=express()
const cors=require("cors")
const port=3000;
const bodyParser=require("body-parser")
app.use(bodyParser.json())
app.use(cors())
 app.use(bodyParser.urlencoded({
 	extended:true
 }))

app.get("/",(req,res)=>{
	res.send("kannaya")				
})
app.post("/newData",(req,res)=>{
	const {name,password}=req.body;
	console.log(name,password)
})






app.listen(port,()=>console.log("server is running on port 3000"))