
import jwt from "jsonwebtoken"
const authMiddleware = (req, res, next) => {
 const authHeader = req.headers.authorization;
 const token = authHeader && authHeader.split(' ')[1];

 if (!token) {
  return res.status(401).json({ error: "Unauthorized -No token provided" });
 }
 jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
  if (err) {
   return res.status(403).json({ error: "Forbidden - Invalid token please try again" });
  }
  req.user = decoded;
  next();
 });
};


export { authMiddleware }
// import jwt from "jsonwebtoken"

// const authMiddelware = (req, res, next) => {
//  const authHeader = req.header.authorization

//  const token = authHeader & authHeader.split("")[1]

//  if (!token) {
//   res.status(404).json({ anauthoried: "Please Provide the token" })
//  }
//  jwt.verify(token, process.env.SCERIT_TOKEN, (error, decoded) => {
//   if (error) {
//    return res.status(403).json({ message: "Forboden UNauthorid token PLease ry agin" })
//   }
//   req.user = decoded
//   next()
//  })
// }

// export { anauthoried }