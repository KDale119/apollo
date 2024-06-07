import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = new ApolloClient( {
    uri: "https://graphqlzero.almansi.me/api",
    cache: new InMemoryCache()
  })
  return (
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps}/>
      </ApolloProvider>
  )
}
