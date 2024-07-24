import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import User from "../models/user";

export const saveUsers = async (req: Request, res: Response) => {
  let { first_name, last_name, email, password_user } = req.body;

  const salt = bcryptjs.genSaltSync();
  password_user = bcryptjs.hashSync(password_user, salt);

  const user = await User.create({
    first_name,
    last_name,
    email,
    password_user,
  });

  const id = user.dataValues.id;
  res.status(200).json({
    msg: `Se registro un nuevo usuario con id: ${id}`,
  });
};
