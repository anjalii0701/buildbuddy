const  express =require("express");

const app=express();

<<<<<<< HEAD

app.get("/user" ,(req,res)=>{
    res.send({firstName: "Akshay" ,lastName :"Saini"});
});

app.post("/user" ,(req,res)=>{
    res.send("Data successfully saved to the database!")
})
app.delete("/user",(req,res)=>{
    res.send("deleted successfully!")
=======
app.use("/hello",(req,res)=>{
    res.send("hello from server ")
});

app.use("/test",(req,res)=>{
    res.send("hello test from server")
>>>>>>> fc46d8a55fd876474df462fc0902676ee4041e42
});

app.listen(3000 ,()=>{
    console.log("server is successfully listening")
});