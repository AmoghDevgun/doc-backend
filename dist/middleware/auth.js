import jwt from "jsonwebtoken";
import { config } from "../config/env.js";
export function requireAuth(req, res, next) {
    const auth = req.headers.authorization || "";
    const [scheme, token] = auth.split(" ");
    if (scheme !== "Bearer" || !token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const payload = jwt.verify(token, config.jwtSecret);
        req.user = { userId: payload.userId, username: payload.username };
        return next();
    }
    catch {
        return res.status(401).json({ message: "Unauthorized" });
    }
}
export default requireAuth;
