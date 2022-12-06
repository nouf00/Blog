import express from 'express';
import { HandlingLog, HandlingRegistr } from '../Contllor/userAuth';
import { valdation } from '../Middalwaer/valdation';
import { UserSchemaLog, UserSchemaRegister } from '../Zod/userZod';


const router =express.Router()


router.post("/register", valdation(UserSchemaRegister), HandlingRegistr)
router.post("/login", valdation(UserSchemaLog), HandlingLog)

export default router