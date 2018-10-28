import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";
import genSchema from "./utils/genSchema";

const PORT = process.env.PORT || 3500;
const app = express();

const server = new ApolloServer({
  schema: genSchema(),
  playground: true
});

server.applyMiddleware({ app });

app.get("/api", (req, res) => {
  res.send({ hello: "there" });
});

createConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
  });
});
