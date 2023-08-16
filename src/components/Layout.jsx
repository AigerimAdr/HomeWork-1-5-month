import { NavLink, Outlet } from "react-router-dom";

const activeMenuLink = ({ isActive }) => (isActive ? "activeMenu" : "");

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"} className={activeMenuLink}>
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink to={"/posts"} className={activeMenuLink}>
              Посты
            </NavLink>
          </li>
          <li>
            <NavLink to={"/forms"} className={activeMenuLink}>
              Форма для постов
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
      <footer>Geeks 2023</footer>
    </>
  );
};
export default Layout;
