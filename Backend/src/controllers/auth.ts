import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import generateJWT from "../helpers/generate-jwt";
import User from "../models/user";

export const login = async (req: Request, res: Response) => {
  const { email, password_user } = req.body;
  let codResponse = "";
  try {
    const login = await User.findOne({
      where: { email },
    });
    if (!login) {
      codResponse = "404";
      return res.status(404).json({
        msg: "Usuario no registrado",
      });
    }
    const validPassword = bcryptjs.compareSync(
      password_user,
      login.dataValues.password_user
    );
    if (!validPassword) {
      codResponse = "400";
      return res.status(400).json({
        msg: "Usuario / contraseña NO son correctos",
      });
    }
    const token = await generateJWT(login.dataValues.id);
    codResponse = "200";
    return res.status(200).json({
      msg: "Bienvenido a Tu Hotel",
      token,
      user: login,
    });
  } catch (error) {
    codResponse = "Error";
    console.log(codResponse);
  } finally {
    console.log("Proceso finalizado con código " + codResponse);
  }
};
