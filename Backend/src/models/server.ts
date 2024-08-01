import express, { Application } from "express";
import cors from "cors";
import authRoutes from "../routes/auth";
import userRoutes from "../routes/users";
import uploadRoutes from "../routes/upload";
import dotenv from "dotenv";
dotenv.config();

class Server {
  private app: Application;
  private port: string | undefined;
  private apiPaths = {
    auth: "/api/auth",
    users: "/api/usuarios",
    upload: "/api/archivos",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.middlewares();
    this.cors();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
  }

  cors() {
    this.app.use(cors());
  }

  routes() {
    this.app.use(this.apiPaths.auth, authRoutes);
    this.app.use(this.apiPaths.users, userRoutes);
    this.app.use(this.apiPaths.upload, uploadRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`localhost: ${this.port}`);
    });
  }
}

export default Server;
