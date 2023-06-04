import { check, validationResult } from "express-validator";

export const userValidator = [
  check("username").trim().not().isEmpty().withMessage("Name is Missing"),
  check("password").trim().not().isEmpty().withMessage("Password is Empty"),
];

export const validate = (req, res, next) => {
  const error = validationResult(req).array();
  if (error.length) {
    return res.json({ error: error[0].msg });
  }

  next();
};
