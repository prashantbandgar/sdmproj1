var express=require('express');
const app=express();
app.get("/", (req, res)=>{
    res.send("welcome");
});

app.listen(8000);
console.log("ShoppingCart Web App is listening on port 8000");