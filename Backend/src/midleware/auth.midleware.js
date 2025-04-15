
import jwt from "jsonwebtoken"
const authMiddleware = (req, res, next) => {
 const authHeader = req.headers.authorization;
 const token = authHeader && authHeader.split(' ')[1];

 if (!token) {
  return res.status(401).json({ error: "Unauthorized -No token provided" });
 }

 jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
  if (err) {
   return res.status(403).json({ error: "Forbidden - Invalid token" });
  }
  req.user = decoded;
  next();
 });
};


export { authMiddleware }
