import { DataTypes } from "sequelize";
import db from "../config/db/db";

const User = db.define("users", {
  first_name: {
    type: DataTypes.STRING,
  },
  last_name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password_user: {
    type: DataTypes.STRING,
  },
});

export default User;
