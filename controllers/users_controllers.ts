import { Response, Request } from 'express'
import "reflect-metadata";
import { Users } from "../src/entity/Users";
import { getRepository } from "typeorm";

export const getUsers = async (req:Request, res:Response) => {
    const test = await getRepository(Users).find({order: {id: "ASC"}})
    res.send(test)
}

export const newUser = (req:Request, res:Response) => {
    let user = new Users();

    user.firstName = req.body.firstName
    user.lastName = req.body.lastName
    user.age = req.body.age
    user.email = req.body.email

    getRepository(Users).save(user)

    res.send(`User "${user.firstName}" was successfully added to DB`)
}

export const getUserById = async (req:Request, res:Response) => {
    const user = await getRepository(Users).findOne(req.params.id)
    if (user) {
        res.send(user)
    } else {
        res.send('Something went wrong, please try again');
    }
}

export const deleteUser = async (req:Request, res:Response) => {
    await getRepository(Users).delete(req.params.id)
    res.send('Deleted Succesfully')
}

export const updateUser = async (req:Request, res:Response) => {
    await getRepository(Users).update(req.params.id, req.body)
    res.send('Successfully Updated')
}