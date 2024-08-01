import { DataTypes } from "sequelize";
import db from "../config/db/db";

const Reservation = db.define(
  "reservation",
  {
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("active", "inactive", "cancel"), // ACTIVO, INACTIVO O CANCELADO.
      allowNull: false,
      defaultValue: "active",
    },
    nightsQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

Reservation.sync({
  force: true,
});

export default Reservation;
