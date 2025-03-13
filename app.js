
import chalk from 'chalk';
import express from 'express';
import debug from 'debug';
import morgan from 'morgan';
//const express = require('express');
//const chalk = require('chalk')
//const debug = require('debug')('app');
const app = express();
const port = 3000;// ห้ามต้องพอร์ตทับกับพอร์ตอื่นๆ ในเครื่องเรา

app.use(morgan('combined'))
app.get("/",(req,res)=>{ //ถ้าเขาเข้ามาให้ส่งค่าอะไรกลับ
    res.send("Copper Tech kinnaphat")

})
 
app.listen(port,()=>{

    debug("Listening on port "+chalk.green(port));
})