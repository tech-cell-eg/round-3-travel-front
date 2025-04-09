import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "",
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
          { path: 'about', element: <About /> },
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