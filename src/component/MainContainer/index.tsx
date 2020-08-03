import React from 'react';
import { Layout, Row, Col } from 'antd';
import SerachUser from '../SerachUser';

import Avatar from '../Avatar';
import RepositoryList from '../RepositoryList';
import FolowersList from '../FolowersList';

const MainContainer: React.FC = () => {
  const { Content } = Layout;
  return (
    <>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{ padding: 30 }}>
          <Row>
            <Col
              span={6}
              style={{ background: 'red', height: 'calc(87vh - 55px)' }}
            >
              <Avatar />
            </Col>
            <Col span={18} style={{ background: 'green' }}>
              <SerachUser />

              <Row style={{ marginLeft: '5%' }}>
                <Col span={12}>
                  <h3>Repositories.</h3>
                  <RepositoryList />
                </Col>
                <Col span={12}>
                  <h3>Folowers</h3>
                  <FolowersList />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Content>
    </>
  );
};

export default MainContainer;
