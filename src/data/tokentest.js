import jwt from 'jsonwebtoken';
//import 'dotenv/config';
import { configDotenv } from 'dotenv';

configDotenv()
const secret_key = process.env.JWT_SECRET_KEY || "lsfm398fnsfj2Ar3q298";
console.log(secret_key)

//func q devuelve el token
export const generateToken = (userData) => {
  const user = {id: userData.id, email: userData.email};
  const expiration = { expiresIn: '1h' };
  return jwt.sign(user, secret_key, expiration);
}