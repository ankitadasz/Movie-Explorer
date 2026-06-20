import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./Components/Layout/AppLayout";
import { Errorpage } from "./Pages/ErrorPage";
import { Home } from "./Pages/Home";
import { TopRated } from "./Pages/TopRated";
import { Trending } from "./Pages/Trending";
import { Explore } from "./Pages/Explore";
import "./App.css";
import { GetApiData } from "./Api/GetApiData";
console.log(createBrowserRouter);

const App = () => {
  console.log("APP RENDERED");
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
          loader:GetApiData,
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
