import Sidebar from './Sidebar';

function SidebarLayout({ children }) {
  return (
    <div className="md:flex">
      <Sidebar />
      <main className="w-3/4 my-5">{children}</main>
    </div>
  );
}

export default SidebarLayout;
