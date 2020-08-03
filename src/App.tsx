import React from 'react';
import { Provider } from 'react-redux';
import { Layout } from 'antd';

import store from './store';
import './App.css';
import MainContainer from './component/MainContainer';
import Header from './component/Header';

const App: React.FC = () => {
  const { Footer } = Layout;

  return (
    <Provider store={store}>
      <Layout>
        <Header />
        <MainContainer />
        <Footer style={{ textAlign: 'center' }}>
          Rosa Design ©2020 Created by Andrey Rosa
        </Footer>
      </Layout>
    </Provider>
  );
};

export default App;
