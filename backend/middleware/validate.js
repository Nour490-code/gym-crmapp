import { validationResult } from "express-validator";
import { check } from "express-validator";

const Validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let error = {};
        errors.array().map((err) => (error[err.param] = err.msg));
        return res.status(422).json({ error });
    }
    next();
};

const validationChain = [
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
    .withMessage("Must be at least 6 chars long")
]
export { Validate, validationChain }