import { MutationResolvers, QueryResolvers } from "../../generated/graphqlgen";
import { userCrud } from './crud';
import { userLogin } from "./login";
import { userQuery } from './queries';

export const Mutation: MutationResolvers.Type = {
  ...userCrud,
  login: userLogin
};

export const Query: QueryResolvers.Type = {
  ...userQuery
}
