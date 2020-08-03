import React from 'react';

import { Layout, Typography } from 'antd';

const Header: React.FC = () => {
  const { Header: LayoutHeader } = Layout;
  return (
    <>
      {' '}
      <LayoutHeader style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Typography.Title>
          Github App - Visualize dados de quem quiser
        </Typography.Title>
      </LayoutHeader>
    </>
  );
};

export default Header;
