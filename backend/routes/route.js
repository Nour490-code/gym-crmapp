import express from "express";
import { register, login } from "../controllers/auth.js";
import Validate from "../middleware/validate.js";
import { check } from "express-validator";

const router = express.Router();


router.post(
    "/register",
    check("email")
        .isEmail()
        .withMessage("Enter a valid email address")
        .normalizeEmail(),
    check("name")
        .not()
        .isEmpty()
        .withMessage("You name is required")
        .trim()
        .escape(),
    check("password")
        .notEmpty()
        .isLength({ min: 6 })
        .withMessage("Must be at least 6 chars long"),
    Validate,
    register
);

router.post('/login', 
    check("email")
        .isEmail()
        .withMessage("Enter a valid email address")
        .normalizeEmail(),
    check("password")
        .notEmpty()
        .withMessage("Password is required"),
    Validate,
    login
)

export default router