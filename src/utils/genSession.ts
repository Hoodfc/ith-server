import connectRedis from "connect-redis";
import session from "express-session";
export const SESSION_SECRET: string = "asdfghjkwo123";
export const RedisStore = connectRedis(session);

export const getSession = (client: any) =>
  session({
    name: "sid",
    store: new RedisStore({ client }),
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 7 // 7 days
    }
  });
