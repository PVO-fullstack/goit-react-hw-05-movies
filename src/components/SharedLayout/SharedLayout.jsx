import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './SharedLayout.module.css';
import styled from '@emotion/styled';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const SharedLayout = () => {
  return (
    <div>
      <header className={css.conteiner}>
        <nav>
          <ul className={css.nav_conteiner}>
            <li>
              <StyledLink className={css.nav_link_item} to="/">
                Home
              </StyledLink>
            </li>
            <li>
              <StyledLink className={css.nav_link_item} to="/movies">
                Movies
              </StyledLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className={css.main_conteiner}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default SharedLayout;
