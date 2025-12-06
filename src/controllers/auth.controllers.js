import { generateToken } from "../data/tokentest.js";

//si exporto la func q controla al endpoint de iniciar sesion, obtengo ese endpoint
export const login = async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;
    if (email === "test@gmail.com" && password === "123456") {
        const user = {email: email, id: "123"}
        const token = await generateToken(user);
        res.json({ token });
    } else {
        res.sendStatus(401);
    }
}