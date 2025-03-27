// import jwt from "jsonwebtoken"

// const token = jwt.sign({ id: 123 }, process.env.JWT, { expiresIn: "30d" });


// const verfifyToken = (req, res, next) => {
//  const token = req.headers["authorization"].split(" ")[1];
//  if (!token) return res.status(403).send("A token is required for authentication");
//  jwt.verify(token, process.env.JWT, (error, decoded) => {
//   if (error) return res.status(404).send("invalid token")
//   req.user = decoded;
//   next()
//  // })
// }