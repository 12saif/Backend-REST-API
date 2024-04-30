const mongoose = require('mongoose');


const uri = "mongodb+srv://mohdsaif9170613062:lDc3koxjnjji47zN@saif-products.d9mqjhk.mongodb.net/saif-products?retryWrites=true&w=majority&appName=saif-products";

const connectDB = () => {
    // console.log("connect db")
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifideTopology: true,
    });
};

module.exports = connectDB;



// lDc3koxjnjji47zN          passwod


// mongodb+srv://mohdsaif9170613062:<password>@saif-products.d9mqjhk.mongodb.net/?retryWrites=true&w=majority&appName=saif-products