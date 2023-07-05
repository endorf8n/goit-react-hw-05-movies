import { Outlet } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import { Header, PageList, StyledLink } from './layout.styled';
import { Suspense } from 'react';

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
      <Suspense
        fallback={
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
