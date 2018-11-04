import { makeExecutableSchema } from "apollo-server-express";

import directives from "../directives";
import resolvers from "../resolvers";
import { mergedTypes } from "./../schema";

export default () =>
  makeExecutableSchema({
    typeDefs: mergedTypes,
    resolvers,
    directiveResolvers: directives
  });
