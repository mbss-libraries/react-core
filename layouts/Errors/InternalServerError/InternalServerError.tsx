import React, { FunctionComponent } from 'react';
import { Result, Button, Row, Col } from 'antd';
import Icon from '@ant-design/icons';
import { ReactComponent as MonkeySvg } from '@assets/svg/Monkey.svg';
import { useHistory } from 'react-router-dom';

export const InternalServerError: FunctionComponent = () => {
  const history = useHistory();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MonkeyIcon = (props: any) => <Icon component={MonkeySvg} {...props} />;
  return (
    <Row justify="space-around" align="middle" className="h-100">
      <Col span={12}>
        <Result
          // status="404"
          title="500 - We can't handle your request"
          icon={
            <MonkeyIcon
              style={{
                color: 'saddlebrown',
                fontSize: '128px',
              }}
            />
          }
          subTitle="A team of highly trained monkeys has been dispatched to deal with this situation"
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
