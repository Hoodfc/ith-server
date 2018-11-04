import { Request } from "express";
import { Redis } from "ioredis";

export interface Context {
  data: Data;
  req: Request;
  session: Session;
  redis: Redis;
}

export interface User {
  id: string;
  name: string;
  password: string;
  email: string;
  role: string;
  createdAt: Date;
}

export interface Error {
  type: string;
  text: string;
}

export interface Data {
  users: User[];
}

export interface Session {
  id?: string;
  name?: string;
  role?: string;
}
