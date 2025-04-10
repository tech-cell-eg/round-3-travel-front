import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import List from './components/List/List';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "",
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
          { path: 'list', element: <List /> },

        ],
      },
    ],
    {
      basename: '/round-3-travel-front', 
    }
  );

  return <RouterProvider router={router} />;
}

export default App;