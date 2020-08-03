import React from 'react';
import { Provider } from 'react-redux';
import { Layout, Row, Col } from 'antd';
import Title from 'antd/lib/typography/Title';
import store from './store';
import './App.css';

const App: React.FC = () => {
  const { Header, Footer, Content } = Layout;

  return (
    <Provider store={store}>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Title>Github App</Title>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: '0 50px', marginTop: 64 }}
        >
          <div className="site-layout" style={{ padding: 24 }}>
            <Row>
              <Col span={6} style={{ background: 'red', minHeight: 480 }}>
                col-12
              </Col>
              <Col span={18} style={{ background: 'green' }}>
                col-12
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Provider>
  );
};

export default App;
