import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import GamePageLayout from "./components/GamePage/GamePageLayout";
import WelcomePage from "./components/WelcomePage/WelcomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <WelcomePage />
    },
    {
      path: "/gamepage",
      element: <GamePageLayout />,
    },
  ])
  return (
    <RouterProvider router={router} />

  );
}

export default App;
