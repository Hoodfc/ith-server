
import { makeExecutableSchema } from "apollo-server-express";

import resolvers from '../resolvers';
import { mergedTypes } from './../schema';

export default () => makeExecutableSchema({ typeDefs: mergedTypes, resolvers});