import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Menu from './menu/Menu';
import ToasterProvider from './ToasterProvider';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      <Navbar />
      <ToasterProvider />
      <ScrollRestoration />

      <div className="pt-[100px] flex flex-1">
        <aside className="hidden xl:block w-[250px] 2xl:w-[280px] 3xl:w-[350px] border-r border-base-300 px-4 py-2">
          <Menu />
        </aside>

        <main className="w-full px-4 py-4">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
