import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";
import Redis from "ioredis";
import "reflect-metadata";
import { createConnection } from "typeorm";
import genSchema from "./utils/genSchema";
import { getSession } from "./utils/genSession";
import getContext from "./utils/getContext";

const PORT: any = process.env.PORT || 3500;
const app = express();
const redisClient = new Redis();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(getSession(redisClient));

const server = new ApolloServer({
  schema: genSchema(),
  playground: true,
  context: req => getContext(req, redisClient),
});

server.applyMiddleware({ app });

app.get("/", (req, res) => {
  res.send({ hello: "there" });
});

createConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
  });
});
