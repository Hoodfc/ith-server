import { fileLoader, mergeTypes } from "merge-graphql-schemas";

import * as fs from "fs";
import * as path from "path";

const typesArray = fileLoader(path.join(__dirname, "./*.type.graphql"));

export const mergedTypes = mergeTypes(typesArray, { all : true });

fs.writeFileSync(
    path.join(__dirname, "../schema.graphql"),
    mergedTypes
);