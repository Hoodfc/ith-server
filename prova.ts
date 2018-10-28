import {fileLoader, mergeResolvers } from "merge-graphql-schemas";
import * as path from "path";

const resArray = fileLoader(path.join(__dirname, "./src/resolvers/*.resolver.ts"));
console.log("ARRAY", resArray);
const resMerges = mergeResolvers(resArray);
console.log("MERGED", resMerges);