const express = require('express');


const userControllers = require("./controllers/users.controllers");




const app = express();
app.use(express.json());

app.post("/register", register);
app.post("/login", login);


app.use("/upload",userControllers);


const connect = require('./configs/db')

app.listen(2346,async () => {
    await connect();
    console.log("server is running at port 2346");
})