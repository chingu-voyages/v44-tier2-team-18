import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import GamePageLayout from "./components/GamePage/GamePageLayout";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import LearnMorePage from "./components/LearnMorePage/LearnMorePage";


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
    {
      path: "/learn-more",
      element: <LearnMorePage />,
    }
  ])
  return (
<<<<<<< HEAD
    // <RouterProvider router={router} />
    <GamePageLayout/>
   
=======
    <RouterProvider router={router} />
>>>>>>> ed271e5938d219b2683beb0a05a0fb5edabf7afc
  );
}

export default App;
