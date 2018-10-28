import { QueryResolvers } from '../generated/graphqlgen';
export const Query: QueryResolvers.Type = {
    hello: () => "Hello",
    msg: (_, { text }) => text
}