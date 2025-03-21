import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import Users from "./Users";
import NewUser from "./NewUser";
import RemovedUsers from "./RemovedUsers";

function App() {
  const browserRouterObject = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      children: [
        {
          path: "new-user",
          element: <NewUser />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "removed-users",
          element: <RemovedUsers />,
        },
      ],
    },
  ]);

  return <RouterProvider router={browserRouterObject} />;
}

export default App;
