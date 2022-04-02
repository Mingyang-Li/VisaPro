import buildGraphQLProvider from "ra-data-graphql-amplication";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { CREDENTIALS_LOCAL_STORAGE_ITEM } from "../constants";
import { Config } from "../util/Config";

const httpLink = createHttpLink({
  uri: `${Config.REACT_APP_API}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(CREDENTIALS_LOCAL_STORAGE_ITEM);
  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    },
  };
});

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

export default buildGraphQLProvider({
  client: apolloClient,
});
