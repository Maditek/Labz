import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
     <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-lg">
            <NavLink to="/">Hamisha Labs</NavLink>
          </div>

          <div className="flex gap-6">
            {[
              ['Home', '/'],
              ['Catalog', '/catalog'],
            ].map(([title, url]) => (
              <NavLink className={ ( {isActive }) => isActive ? "text-black font-semibold" : "text-gray-600 hover:text-black font-medium"} to={url}>{title}</NavLink>
            ))}            
          </div>
      </div>
    </nav>
      <Outlet />
    </>
  );
};