import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";
import session from "express-session";
import "reflect-metadata";
import { createConnection } from "typeorm";
import genSchema from "./utils/genSchema";

const PORT: any = process.env.PORT || 3500;
const SESSION_SECRET: string = "asdfghjkwo123";
const app = express();

app.use(
  cors({
    origin: "http://localhost:3500",
    credentials: true
  })
);

app.use(
  session({
    name: "sid",
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 7 // 7 days
    }
  })
);

const context: any = (req: any) => {
  return {
    req: req.req,
    session: req.req.session
  };
};

const server = new ApolloServer({
  schema: genSchema(),
  playground: true,
  context
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
