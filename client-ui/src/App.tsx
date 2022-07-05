import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  useReactiveVar,
} from '@apollo/client';
import { IRoute } from './dto/IRoute';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { Store, userInfo } from './graphql/Store';
import { ConfigService } from './services/config.service';
import Protected from './components/auth/Protected';

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const info = useReactiveVar(userInfo);
  const token = info.accessToken;

  useEffect(() => {
    setLoggedIn(!loggedIn);
  }, [token]);

  const client = new ApolloClient({
    link: new HttpLink({
      uri: ConfigService.REACT_APP_GRAPHQL_API,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
    cache: Store,
  });

  const routes: IRoute[] = [
    {
      path: '*',
      component: <Navigate to="/login" replace />,
    },
    {
      path: '/login',
      component: <Login />,
    },
    {
      path: '/dashboard',
      component: (
        <Protected
          isLoggedIn={window.localStorage.getItem('accessToken') !== null}
        >
          <Dashboard />
        </Protected>
      ),
    },
  ];

  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          {routes.map((r, index) => (
            <Route key={index} path={r.path} element={r.component} />
          ))}
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
