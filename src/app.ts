import express from "express";
import products_routes from '../routes/products_routes'
import users_routes from '../routes/users_routes'
import "reflect-metadata";
import { createConnection } from "typeorm";

const PORT = 3000;

createConnection().then(async connection => {
    console.log('Connection to DB Established Succesfully');

    const app = express();
    app.use(express.json())
    app.use('/', products_routes)
    app.use('/', users_routes)

    app.listen(PORT, () => console.log(`Server Running On http://localhost:${PORT}`))
}).catch(error => console.log(error));