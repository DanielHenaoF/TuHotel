import express, { Application } from "express";
import dotenv from "dotenv";
dotenv.config();

class Server {
  private app: Application;
  private port: string | undefined;
  private apiPaths = {};

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
  }

  routes() {}
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Localhost: ${this.port}`);
    });
  }
}

export default Server;
