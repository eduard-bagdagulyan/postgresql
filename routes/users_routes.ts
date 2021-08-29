import express from 'express';
import {getUsers, newUser, getUserById, deleteUser, updateUser} from '../controllers/users_controllers';

const router = express.Router();

router.get('/users', getUsers)

router.get('/users/:id', getUserById)

router.post('/users', newUser)

router.delete('/users/:id', deleteUser)

router.patch('/users/:id', updateUser)

export default router;