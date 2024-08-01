"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (Sequelize, DataTypes) => {
    await Sequelize.createTable("reservation", {
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
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  },

  down: async (Sequelize) => {
    await Sequelize.dropTable("resevation");
  },
};
