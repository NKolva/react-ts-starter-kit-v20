import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import './layout.scss';

interface IProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<IProps> = (props) => {
  const { children } = props;

  // const asd = '';

  const { pathname } = useLocation();

  useEffect(() => {
    const canControlScrollRestoration = 'scrollRestoration' in window.history;
    if (canControlScrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="layout">
      <div>{/* <Header /> */}</div>
      <div>{children ?? <Outlet />}</div>
      {/* <Subscribe /> */}
      {/* <Footer /> */}
    </div>
  );
};
