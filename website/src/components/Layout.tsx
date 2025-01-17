import GitHubCorners from '@uiw/react-github-corners';
import { BACKGROUND_IMG } from '@uiw/react-color';
import { useEffect, useReducer } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { hsvaToHslaString } from '@uiw/react-color';
import '@wcj/dark-mode';
import { reducer, Context, defaultContext } from '../Store';
import { routes } from '../router';
import Header from '../components/Header';

import styles from './Layout.module.less';

export default function Root() {
  const [state, dispatch] = useReducer(reducer, defaultContext);
  useEffect(() => {
    document.body.style.background = `url(${BACKGROUND_IMG}) left center`;
  }, []);
  return (
    <Context.Provider value={{ ...state, dispatch }}>
      <div
        style={{ backgroundColor: hsvaToHslaString(state.hsva), transition: 'background-color 0.3s ease 0s', minHeight: '100vh' }}
      >
        <dark-mode permanent light="Dark" dark="Light"></dark-mode>
        <div className={styles.version}>v{VERSION}</div>
        <GitHubCorners fixed zIndex={99} size={60} target="__blank" href="https://github.com/uiwjs/react-color" />
        <Header menus={routes.children || []} />
        <Outlet />
        <ScrollRestoration />
      </div>
    </Context.Provider>
  );
}
