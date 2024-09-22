import express from "express";
import { register, login } from "../controllers/auth.js";
import Validate from "../middleware/validate.js";
import { check } from "express-validator";
import { Verify } from "../middleware/verify.js";

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

router.get("/", Verify, (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            user: req.user
        },
        message: "You are logged in"
    })
})
export default router