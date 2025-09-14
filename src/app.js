const  express =require("express");

const app=express();


app.get("/user" ,(req,res)=>{
    res.send({firstName: "Akshay" ,lastName :"Saini"});
});

app.post("/user" ,(req,res)=>{
    res.send("Data successfully saved to the database!")
})
app.delete("/user",(req,res)=>{
    res.send("deleted successfully!")
});

app.listen(3000 ,()=>{
    console.log("server is successfully listening")
});