import express from "express";
import { register, login } from "../controllers/auth.js";
import {Validate, validationChain} from "../middleware/validate.js";
import { check } from "express-validator";
import { Verify } from "../middleware/verify.js";

const router = express.Router();


router.post(
    "/register",
    validationChain,
    Validate,
    register
);

router.post('/login', 
    validationChain[0],
    validationChain[2],
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