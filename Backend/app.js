const express = require("express")
const cors =require("cors")
const app = express()

app.use(express.json())//yo bhaneko hai sabai lkura haru json format ma hunxa bhaneko
app.use(cors(
    {
        origin:"http://localhost:5173"
    }
))
const laptopRouter=require("./routes/laptopRoutes")

app.use("",laptopRouter)
app.listen(3000,()=>{
    console.log("server is runnin in the port 3000")
})
