import { Request, Response } from "express";
import Role from "../models/role";

export const saveRoles = async (req: Request, res: Response) => {
  let { type_rol } = req.body;

  const role = await Role.create({
    type_rol,
  });

  const id = role.dataValues.id;
  res.status(200).json({
    msg: `Se registra rol: ${id}`,
  });
};
