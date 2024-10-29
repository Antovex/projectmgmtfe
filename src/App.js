import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Home from './pages/Home';
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
// import { Query } from "mongoose";

// This is the Heart of frontend and  the root component of the react app

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

console.log("GraphQL URI:", process.env.REACT_APP_GRAPHQL_URI);

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI,
  cache,
});

function App() {
  return (
    <>
      {/* Wrapping in Apollo which is a client used to communicate with graphql */}
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/projects/:id' element={<Project />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
