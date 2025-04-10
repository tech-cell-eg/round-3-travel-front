import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "",
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },

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