import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import User from "../models/user";

export const saveUsers = async (req: Request, res: Response) => {
  let { first_name, last_name, email, password_user } = req.body;

  const salt = bcryptjs.genSaltSync();
  password_user = bcryptjs.hashSync(password_user, salt);

  const existenteUser = await User.findOne({ where: { email } });
  if (existenteUser) {
    return res.status(400).json({
      success: false,
      msg: "El usuario ya se encuentra registrado",
    });
  }

  const user = await User.create({
    first_name,
    last_name,
    email,
    password_user,
  });

  const id = user.dataValues.id;
  res.status(200).json({
    msg: `Se registro exitosamente con id: ${id}`,
  });
};
