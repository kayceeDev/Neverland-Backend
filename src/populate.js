require('dotenv').config();

const connectDB = require('./db');
const { Book } = require('./models');

const jsonProducts = require('./books.json');

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log('Database Connection Is Successful!');
        await Product.create(jsonProducts);
        console.log('Database Population Is Successful!');
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

start();
