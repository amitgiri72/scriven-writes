import express from 'express';
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";


//configure env
dotenv.config();


//rest object
const app = express();

//middlewares

app.use(express.json());

// routes



//rest api
app.get("/", (req, res) => {
  res.send("<h1>welcome  to Scriven Writes app</h1>");
});



//port
const PORT = process.env.PORT || 8080;


app.listen(PORT, ()=>{
    console.log(`server is running on port : ${PORT}`.bgCyan.white);
});     