export function validateRegister(req, res, next) {
    const { name, email, password } = req.body ?? {};
    if (typeof name !== "string" || !name.trim()) {
        return res.status(400).json({ message: "name is required" });
    }
    if (typeof email !== "string" || !email.includes("@")) {
        return res.status(400).json({ message: "valid email is required" });
    }
    if (typeof password !== "string" || password.length < 8) {
        return res.status(400).json({ message: "password must be at least 8 characters" });
    }
    return next();
}
export function validateLogin(req, res, next) {
    const { email, password } = req.body ?? {};
    if (typeof email !== "string" || !email.includes("@")) {
        return res.status(400).json({ message: "valid email is required" });
    }
    if (typeof password !== "string" || password.length < 1) {
        return res.status(400).json({ message: "password is required" });
    }
    return next();
}
