import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { IRoute } from './dto/IRoute';
import Login from './pages/Login';

function App() {
  const routes: IRoute[] = [
    {
      path: '/login',
      component: <Login />,
    },
    {
      path: '/dashboard',
      component: <h1>dashboard</h1>,
    },
  ];
  return (
    <Router>
      <Routes>
        {routes.map((r) => (
          <Route path={r.path} element={r.component} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
