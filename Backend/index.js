const express=require('express');
const cors=require('cors');
const fs=require('fs/promises');
const app=express();
const port=9000;
let users=[]
app.use(express.json())
app.use(cors())

const readdata=async ()=>{
    users=JSON.parse(await fs.readFile('./data.json','utf8'))
}
const writedata=async ()=>{
   await fs.writeFile('./data.json',JSON.stringify(users))
}
app.get('/users',async(req,res)=>{
    res.json(users)
}) 

app.post('/users',async(req,res)=>{
    const newuser={
        id:users.length+1,
        name:req.body.name,
        age:req.body.age
    }
    users.push(newuser)
    await writedata();
    res.status(201).json({message:"data save successfully"})

})

app.listen(port,()=>{
    console.log(`app is run at ${port}`)
})