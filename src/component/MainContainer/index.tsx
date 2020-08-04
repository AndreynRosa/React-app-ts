import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import SerachUser from '../SerachUser';

import Avatar from '../Avatar';
import RepositoryList from '../RepositoryList';
import FolowersList from '../FolowersList';

const MainContainer: React.FC = () => {
  const { Title, Paragraph } = Typography;
  const { Content } = Layout;
  return (
    <>
      <Content style={{ padding: '0 90px', marginTop: 24 }}>
        <div style={{ padding: 30 }}>
          <Title level={1} style={{ marginTop: '7%', marginBottom: 0 }}>
            Search for someone on github.
          </Title>
          <Paragraph style={{ marginBottom: '5%', color: '#40a9ff' }}>
            Input the username and press the search button.{' '}
          </Paragraph>
          <Row>
            <Col span={6} style={{ height: 'calc(60vh - 55px)' }}>
              <Avatar />
            </Col>
            <Col span={18} style={{ marginTop: '-3%' }}>
              <SerachUser />

              <Row style={{ marginLeft: '5%', marginTop: '-2%' }} gutter={50}>
                <Col span={8}>
                  <RepositoryList />
                </Col>
                <Col span={8}>
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
