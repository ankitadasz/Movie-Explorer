import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./Components/Layout/AppLayout";
import { Errorpage } from "./Pages/ErrorPage";
import { Home } from "./Pages/Home";
import { TopRated } from "./Pages/TopRated";
import { Trending } from "./Pages/Trending";
import { Explore } from "./Pages/Explore";

console.log(createBrowserRouter);

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Errorpage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/explore",
          element: <Explore />,
        },
        {
          path: "/trending",
          element: <Trending />,
        },
        {
          path: "/toprated",
          element: <TopRated />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
