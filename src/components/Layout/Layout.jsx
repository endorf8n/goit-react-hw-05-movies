import { NavLink, Outlet } from 'react-router-dom';

const routes = [
  { path: '/', text: 'Home' },
  { path: '/movies', text: 'Movies' },
];

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            {routes.map(route => (
              <li key={route.path}>
                <NavLink to={route.path}>{route.text}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
