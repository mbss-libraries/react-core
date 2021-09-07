import React from 'react';
import { Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Button } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProps {}
const navbarBg = 'navbar-theme';
export const NavbarLanding: React.FC<IProps> = () => {
  const history = useHistory();

  return (
    <Navbar bg={navbarBg} expand="lg" className="layout-navbar align-items-lg-center container-p-x">
      <div className="row">
        <div className="col-2 p-2">{/* <img src={Logo} alt="Zalando" width="50%" /> */}</div>
        <div className="col d-flex align-items-center justify-content-center">
          <h2 className="text-dark">WHIT - Apps</h2>
        </div>
        <div className="col-2 d-flex align-items-center justify-content-end">
          <Button positive icon={<FontAwesomeIcon icon="sign-in-alt" />} onClick={() => history.push('/login')} />
        </div>
      </div>
    </Navbar>
  );
};
