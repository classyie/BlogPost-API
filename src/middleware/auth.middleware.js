import jwt from "jsonwebtoken";
import User from "../models/users.model.js";

export const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).send({ message: "Unauthorized" });
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET);
        if (!decode) {
            return res.status(401).send({ message: "Unauthorized" });
        }

        const user = await User.findById(decode.userId).select("-password");
        if (!user) {
            return res.status(401).send({ message: "Unauthorized" });
        }
        req.user = user;
        next();
    } catch (error) {
        console.error("Error authenticating user:", error.message);
        return res.status(500).send({ message: "Internal Server Error" });

    }
}