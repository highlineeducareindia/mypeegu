import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  return (
    <div className=" font-manrope min-h-screen flex flex-col">
        <ScrollToTop />
      <Header />
      
      <main className="flex-grow ">
        <Outlet /> 
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
