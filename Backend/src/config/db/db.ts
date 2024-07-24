import { Sequelize } from "sequelize";

const db = new Sequelize("tuhotel", "root", "Daniel25", {
  host: "127.0.0.1",
  dialect: "mysql",
});

try {
} catch (error) {
  console.log(error);
}

export default db;
