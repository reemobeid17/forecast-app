import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

import "./index.css";

import Layout from "./components/Layout";
import Home from "./pages/Home";

const queryClient = new QueryClient();
Chart.register(CategoryScale);

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Layout,
      children: [
        {
          index: true,
          Component: Home,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
