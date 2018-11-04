import { MutationResolvers, QueryResolvers } from "../generated/graphqlgen";
import { userCrud } from './user/crud';
import { userLogin } from "./user/login";
import { userQuery } from './user/queries';

export const Mutation: MutationResolvers.Type = {
  ...userCrud,
  login: userLogin,
};

export const Query: QueryResolvers.Type = {
  ...userQuery
}
