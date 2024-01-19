import {createBrowserRouter} from "react-router-dom";
import {SignInPage} from "./pages/SignInPage";
import {Layout} from "./layout";
import {HomePage} from "./pages/HomePage.tsx";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <SignInPage />
    },
    {
        element: <Layout />,
        children: [
          {
              path: "/home",
              element: <HomePage />
          },
      ]
    },

])