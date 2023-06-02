import express from 'express'
import { login, register } from '../controller/user.controller.js';
import { userValidator,validate } from '../middleware/validator.js';

const router = express.Router();

router.post('/register',userValidator, validate, register);
router.post("/login", userValidator, validate,login);

export default router;