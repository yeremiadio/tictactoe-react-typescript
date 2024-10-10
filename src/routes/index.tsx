import TicTacToe from "@/pages/TicTacToe/TicTacToe";
import HomePage from "@/pages/HomePage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/game",
    element: <TicTacToe />,
  },
]);
