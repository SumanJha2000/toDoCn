//getting packages
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const router = require('./routers/router.js');
const app = express();
const PORT = 3000;
const dotenv = require('dotenv');
dotenv.config();

//mongodb connection
mongoose.connect(process.env.DB, ({
    useNewUrlParser: true,
    useUnifiedTopology: true,
}), () => {
    console.log('mongoose connected');
})

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');


//routes
app.use(router);

//server configuration
app.listen(PORT, () => {
    console.log(`server is listening at ${PORT}`);
})