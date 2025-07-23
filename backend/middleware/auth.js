import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Authorization header missing or malformed' });
        }

        const token = authHeader.split(' ')[1];

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Store the user ID or entire decoded payload
        req.user = decoded.id; // or `req.user = decoded` if you want more fields

        next();
    } catch (error) {
        console.error("Auth error:", error.message);
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
};

export default auth;