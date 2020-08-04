import React from 'react';
import { useSelector } from 'react-redux';

import { List, Typography } from 'antd';

import { RepositoriesState } from '../../store/ducks/repositories/types';

interface RootState {
  repositories: RepositoriesState;
}

const RepositoryList: React.FC = () => {
  const repositoryList = useSelector((state: RootState) => state.repositories);
  const { Title, Text } = Typography;

  return (
    <>
      <List
        style={{ height: '244px', background: '#fff' }}
        size="small"
        header={<Title level={4}>Repository</Title>}
        bordered
        dataSource={repositoryList.data}
        renderItem={(item) => (
          <List.Item>
            <Text>
              {item.name}
              {item.id}
            </Text>
          </List.Item>
        )}
      />
    </>
  );
};

export default RepositoryList;
