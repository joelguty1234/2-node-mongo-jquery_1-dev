const app = require("./app");
const port = 3000;
const mongoose = require("mongoose")
require('dotenv').config();
//const password = process.env.MONGODB_PASSWORD;
const password = "76nAM37BezSpJvuM"
const urlMongoDb = `mongodb+srv://joelguty33:${password}@api-rest-devguty22.r96pnd9.mongodb.net/apidb&authSource=admin`


async function startServer() {
    try {
        await mongoose.connect(urlMongoDb);
        console.log('Connected to MongoDB successfully!');
        app.listen(port, () => {
            console.log("Server running at http://localhost:" + port);
        });
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
}

startServer();

