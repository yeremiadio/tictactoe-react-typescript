import Tictactoe from "@/pages/tictactoe";
import HomePage from "@/pages/HomePage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/tictactoe",
    element: <Tictactoe />,
  },
]);
