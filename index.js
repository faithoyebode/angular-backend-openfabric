const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const productRoutes = require("./routes/productRoutes")
const {errorHandler} = require("./middlewares/errorMiddleware");

require('dotenv').config();
const app = express();
const port = 3000

app.listen(process.env.APP_PORT, async () => {
    console.log(`Example app listening on port ${process.env.APP_PORT}`);
    try{
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("database connected");
    }catch(e){
        console.log("Error!" + e);
    }
    // await mongoose.connect(process.env.DB_URL, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true
    // }).then(function (result) {
    //     console.log("database connected");
    // }).catch(function (err) {
    //     console.log("Error!" + err);
    // });
});

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/products', productRoutes);

app.use(errorHandler)

