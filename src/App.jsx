import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/ContactPage";
import Students from "./pages/solution/Students";
import Teachers from "./pages/solution/Teachers";
import Parents from "./pages/solution/Parents";
import OurApproach from "./pages/ourApproach/OurApproach";
import InstitutionalArchitecture from "./pages/institutional/InstitutionalArchitecture";
import Careers from "./pages/career/career";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "our-approach", element: <OurApproach/> },
      {
        path: "solution",
        children: [
          { path: "student-development", element: <Students /> },
          { path: "educator-excellence", element: <Teachers /> },
          { path: "parent-partnership", element: <Parents /> },
          // {path: "architecture", element: <Architecture />},
        ],
      },
      { path: "institutional-architecture", element: <InstitutionalArchitecture /> },
      { path: "careers-community", element: <Careers /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
