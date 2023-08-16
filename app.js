import express from "express";
import morgan from "morgan";

//Route Imports
//import { sesionRouter } from './routes/user.routes';
import developerRouter from './src/routes/developer.routes';
import gameRouter from './src/routes/game.routes';


import cors  from 'cors'
const app = express();

// Settings
app.set("port",3000);
//
app.use(cors()) //Todo el mundo()

// Middleware
app.use(morgan("dev"));
app.use(express.json());

// Routes
//app.use(sesionRouter);
app.use("/api/developer",developerRouter);
app.use("/api/game",gameRouter);

export default app;