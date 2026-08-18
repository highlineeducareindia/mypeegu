import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import ConferenceRegisterWidget from "./ConferenceRegisterWidget";
import StudentSupportWidget from "./studentSupport/StudentSupportWidget";

const Layout = () => {
  return (
    <div className=" font-manrope min-h-screen flex flex-col">
        <ScrollToTop />
      <Header />

      <main className="flex-grow ">
        <Outlet />
      </main>

      <Footer />
      <ConferenceRegisterWidget />
      <StudentSupportWidget />
    </div>
  );
};

export default Layout;