export const roleAuth = (...allowedRoles) => {
    return (req, res, next) => {
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({
                status: "failed",
                code: 403,
                data: [],
                message: "You do not have permission to access this resource"
            });
        }
        next();
    }
}

