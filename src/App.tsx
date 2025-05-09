
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import List from './components/List/List';


const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "",
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },

          { path: 'list', element: <List /> },

          { path: 'details/:slug', element: <Details /> },
        ],
      },
    ],
    {
      basename: "/round-3-travel-front",
    }
  );

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
