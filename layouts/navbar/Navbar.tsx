import React, { useEffect } from 'react';
import { Navbar as RBNavbar, Nav } from 'react-bootstrap';
import { Actions } from './actions/Actions';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from 'src/store/reducer';

interface IProps {}
const navbarBg = 'navbar-theme';
export const Navbar: React.FC<IProps> = () => {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state: IStore) => state.authentication);

  useEffect(() => {
    // if (!authUser) dispatch(AuthenticationAction.requestAuthUser());
    // layoutHelpers.setCollapsed(authUser?.properties.global?.isMenuCondensed ?? false);
  }, [authUser, dispatch]);

  const toggleSidenav = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    // dispatch(AuthUserAction.requestSetProperties({ path: 'isMenuCondensed', value: !layoutHelpers.isCollapsed(), options: { app: 'global' } }));
  };

  const onToggleSidenav = () => {
    // TODO: save in AuhtUser
  };

  return (
    <RBNavbar bg={navbarBg} expand="lg" className="layout-navbar align-items-lg-center container-p-x" onToggle={onToggleSidenav}>
      <Nav className="align-items-lg-center mr-auto mr-lg-4">
        <Nav.Item as="a" className="nav-item nav-link px-0 ml-2 ml-lg-0" href="#toggle" onClick={toggleSidenav}>
          <i className="ion ion-md-menu text-large align-middle"></i>
        </Nav.Item>
      </Nav>

      <RBNavbar.Toggle />
      <div className="row w-100">
        <div className="col-3 text-center"></div>
        <div className="col-3">
          <Actions />
        </div>
      </div>
    </RBNavbar>
  );
};
