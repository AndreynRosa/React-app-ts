import React from 'react';

import { Layout, Typography } from 'antd';

const Header: React.FC = () => {
  const { Header: LayoutHeader } = Layout;
  return (
    <>
      {' '}
      <LayoutHeader
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          background: '#40a9ff',
        }}
      >
        <div className="logo" />
        <Typography.Title style={{ marginLeft: '5%', color: '#fff' }}>
          Github App
        </Typography.Title>
      </LayoutHeader>
    </>
  );
};

export default Header;
