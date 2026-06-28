const express = require("express");

const healthRouter = express.Router();

healthRouter.get('/health',(req,res)=>{
    res.status(200).send("server is healthy");
})

module.exports = healthRouter;