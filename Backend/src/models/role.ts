import { DataTypes } from "sequelize";
import db from "../config/db/db";

const Role = db.define("roles", {
  type_rol: {
    type: DataTypes.STRING,
  },
});

export default Role;
