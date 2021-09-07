import React, { FunctionComponent } from 'react';

import { Result, Button, Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';

export const NotFound: FunctionComponent = () => {
  const history = useHistory();
  return (
    <Row justify="space-around" align="middle" className="h-100">
      <Col span={12}>
        <Result
          status="404"
          title="404 - Page not found"
          subTitle="Are you searching something? Go back and try again"
          extra={
            <div>
              <Button type="default" href="/">
                Back Home
              </Button>
              <Button type="primary" onClick={() => history.goBack()} className="ml-3">
                Go back
              </Button>
            </div>
          }
        />
      </Col>
    </Row>
  );
};
