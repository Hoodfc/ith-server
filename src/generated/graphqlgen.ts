// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from "graphql";
import { Context } from "../types";
import { Error } from "../types";
import { User } from "../types";

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export interface ArgsGetUser {
    name: string;
  }

  export type HelloResolver = (
    parent: {},
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type GetUserResolver = (
    parent: {},
    args: ArgsGetUser,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User | null | Promise<User | null>;

  export type GetAllUsersResolver = (
    parent: {},
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User[] | Promise<User[]>;

  export interface Type {
    hello: (
      parent: {},
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    getUser: (
      parent: {},
      args: ArgsGetUser,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User | null | Promise<User | null>;

    getAllUsers: (
      parent: {},
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User[] | Promise<User[]>;
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {};

  export interface updateUserInput {
    name: string;
    password: string;
    email: string;
  }

  export interface ArgsCreateUser {
    name: string;
    password: string;
    email: string | null;
  }

  export interface ArgsDeleteUser {
    id: string;
  }

  export interface ArgsUpdateUser {
    id: string;
    update: updateUserInput;
  }

  export interface ArgsLogin {
    name: string;
    password: string;
  }

  export type CreateUserResolver = (
    parent: {},
    args: ArgsCreateUser,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Error | null | Promise<Error | null>;

  export type DeleteUserResolver = (
    parent: {},
    args: ArgsDeleteUser,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => boolean | Promise<boolean>;

  export type UpdateUserResolver = (
    parent: {},
    args: ArgsUpdateUser,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => boolean | Promise<boolean>;

  export type LoginResolver = (
    parent: {},
    args: ArgsLogin,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Error | null | Promise<Error | null>;

  export interface Type {
    createUser: (
      parent: {},
      args: ArgsCreateUser,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Error | null | Promise<Error | null>;

    deleteUser: (
      parent: {},
      args: ArgsDeleteUser,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => boolean | Promise<boolean>;

    updateUser: (
      parent: {},
      args: ArgsUpdateUser,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => boolean | Promise<boolean>;

    login: (
      parent: {},
      args: ArgsLogin,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Error | null | Promise<Error | null>;
  }
}

export namespace ErrorResolvers {
  export const defaultResolvers = {
    type: (parent: Error) => parent.type,
    text: (parent: Error) => parent.text
  };

  export type TypeResolver = (
    parent: Error,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type TextResolver = (
    parent: Error,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type {
    type: (
      parent: Error,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    text: (
      parent: Error,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace UserResolvers {
  export const defaultResolvers = {
    id: (parent: User) => parent.id,
    name: (parent: User) => parent.name,
    password: (parent: User) => parent.password,
    email: (parent: User) => parent.email,
    role: (parent: User) => parent.role
  };

  export type IdResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type PasswordResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type EmailResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type RoleResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export interface Type {
    id: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    password: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    email: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;

    role: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  Mutation: MutationResolvers.Type;
  Error: ErrorResolvers.Type;
  User: UserResolvers.Type;
}
