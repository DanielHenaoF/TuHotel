import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import generateJWT from "../helpers/generate-jwt";
import User from "../models/user";

export const login = async (req: Request, res: Response) => {
  const { email, password_user } = req.body;

  try {
    const login = await User.findOne({
      where: { email },
    });
    if (!login) {
      return res.status(401).json({
        success: false,
        msg: "El usuario no fue encontrado o no ha sido registrado",
      });
    }
    const validPassword = bcryptjs.compareSync(
      password_user,
      login.dataValues.password_user
    );

    if (!validPassword) {
      return res.status(401).json({
        success: false,
        msg: "Usuario / contraseña NO son correctos",
      });
    }
    
    const token = await generateJWT(login.dataValues.id);

    return res.status(200).json({
      msg: "Bienvenido a Tu Hotel",
      token,
      user: login,
    });
  } catch (error) {
    console.log("Error", error);
  }
};
