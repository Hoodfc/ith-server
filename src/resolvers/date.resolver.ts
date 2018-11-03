import { GraphQLScalarType, Kind } from "graphql";

export default {
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Custom scalar date type",
    parseValue: value => {
      return new Date(value);
    },
    serialize: value => {
      return value.getTime();
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value); // ast value is always in string format
      }
      return null;
    }
  })
};
