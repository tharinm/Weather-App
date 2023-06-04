import express from 'express'
import { login, logout, register } from '../controller/user.controller.js';
import { userValidator,validate } from '../middleware/validator.js';

const router = express.Router();

router.post('/register',userValidator, validate, register);
router.post("/login", userValidator, validate, login);
router.post('/logout',logout)

export default router;