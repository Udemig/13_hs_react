import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Register from "./pages/register";
import Layout from "./components/layout";
import Protected from "./components/protected";
import Detail from "./pages/detail";
import Create from "./pages/create";
import Edit from "./pages/edit";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Protected>
            <Home />
          </Protected>
        ),
      },
      {
        path: "/shoe/:id",
        element: (
          <Protected>
            <Detail />
          </Protected>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <Protected allowedRoles={["admin"]}>
            <Dashboard />
          </Protected>
        ),
      },
      {
        path: "/dashboard/create",
        element: (
          <Protected allowedRoles={["admin"]}>
            <Create />
          </Protected>
        ),
      },
      {
        path: "/dashboard/edit/:id",
        element: (
          <Protected allowedRoles={["admin"]}>
            <Edit />
          </Protected>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
