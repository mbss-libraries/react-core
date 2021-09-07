import { Tag } from 'antd';
import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer: FunctionComponent = () => {
  const footerBg = 'footer-theme';
  return (
    <nav className={`layout-footer footer bg-${footerBg}`}>
      <div className="container-fluid container-p-x pb-3 text-center">
        <div className="mt-3">
          <strong className="mb-1">Contact</strong>
          <div>
            <Tag icon={<FontAwesomeIcon icon="envelope" className="text-muted mr-2" />}>
              <a href="mailto:whit-dev@zalando.de">E-Mail</a>
            </Tag>
            <Tag icon={<FontAwesomeIcon icon="headset" className="text-muted mr-2" />}>
              <a href="mailto:whit-dev-support@zalando.de">Ticket</a>
            </Tag>
          </div>
        </div>
      </div>
    </nav>
  );
};
