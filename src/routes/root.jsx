import {createBrowserRouter, RouterProvider,
} from "react-router-dom"
import App from "../layouts/App";
import ErrorPage from '/src/components/ErrorPage';
import Main from "../components/Main";
import Index from "../components/article/Index";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        Component: Main,
      },
      {
        path: "/articles",
        Component: Index,
      },
    ],
  },
  
]);
export default function Root(){
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}