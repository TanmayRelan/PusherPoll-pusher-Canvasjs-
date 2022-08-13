const express = require('express');
const path= require('path');
const bodyParser = require('body-parser');
const cors=require('cors');

const app =express();

const poll = require('./routes/poll');
// Set public Folder

app.use(express.static(path.join(__dirname,'public')));

// Body parser Middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Enable Cors

app.use(cors());

app.use('/poll',poll);

const port= 3000;

// Start Server

app.listen(port,()=>console.log(`Server started on ${port}`));