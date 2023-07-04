import { Outlet } from 'react-router-dom';
import { Header, PageList, StyledLink } from './layout.styled';

const routes = [
  { path: '/', text: 'Home' },
  { path: '/movies', text: 'Movies' },
];

export const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <PageList>
            {routes.map(route => (
              <li key={route.path}>
                <StyledLink to={route.path}>{route.text}</StyledLink>
              </li>
            ))}
          </PageList>
        </nav>
      </Header>
      <Outlet />
    </>
  );
};
