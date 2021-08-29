import { Response, Request } from 'express'
import "reflect-metadata";
import { Products } from "../src/entity/Products";
import { getRepository } from "typeorm";

export const getProducts = async (req:Request, res:Response) => {
    const test = await getRepository(Products).find({order: {id: "ASC"}})
    res.send(test)
}

export const newProduct = (req:Request, res:Response) => {
    let product = new Products();

    product.name = req.body.name
    product.price = req.body.price
    product.isAvailable = req.body.isAvailable

    getRepository(Products).save(product)

    res.send(`Product "${product.name}" was successfully added to DB`)
}

export const getProductById = async (req:Request, res:Response) => {
    const product = await getRepository(Products).findOne(req.params.id)
    if (product) {
        res.send(product)
    } else {
        res.send('Something went wrong, please try again');
    }
}

export const deleteProduct = async (req:Request, res:Response) => {
    await getRepository(Products).delete(req.params.id)
    res.send('Deleted Succesfully')
}

export const updateProduct = async (req:Request, res:Response) => {
    await getRepository(Products).update(req.params.id, req.body)
    res.send('Successfully Updated')
}