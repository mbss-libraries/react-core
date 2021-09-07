// import AuthenticationAction from 'core/stores/authentication/actions/AuthenticationAction';
import React, { Fragment } from 'react';
import { Button } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import AuthenticationAction from 'src/store/authentication/AuthenticationAction';

interface IProps {}
export const Actions: React.FC<IProps> = () => {
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(AuthenticationAction.setLogout());
  };

  return (
    <Fragment>
      <div className="d-flex justify-content-end">
        <Button color="red" className="float-right" onClick={onLogoutClick}>
          <FontAwesomeIcon icon="sign-out-alt" />
        </Button>
      </div>
    </Fragment>
  );
};
