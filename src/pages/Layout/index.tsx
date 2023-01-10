import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./layout.scss";

const Layout = () => {
  return (
    <div className="layout_wrapper">
      <nav className="nav_wrapper">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : undefined)}
              end
            >
              목록페이지
            </NavLink>
          </li>
          <li>
            <NavLink
              to="products/create"
              className={({ isActive }) => (isActive ? "active" : undefined)}
              end
            >
              등록하기
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="contents_wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
