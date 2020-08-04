import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Typography } from 'antd';
import { FollowersState } from '../../store/ducks/folowers/types';

// import { Container } from './styles';
interface RootState {
  folowers: FollowersState;
}

const FolowersList: React.FC = () => {
  const [serching, setSerching] = useState(false);
  const folowerList = useSelector((state: RootState) => state.folowers);
  const { Title, Text } = Typography;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!serching) {
      setSerching(true);
    }
  }, [dispatch, folowerList, serching]);
  return (
    <>
      <List
        style={{ height: '244px', background: '#fff' }}
        size="small"
        header={<Title level={4}>Folowers</Title>}
        bordered
        dataSource={folowerList.data}
        renderItem={(item) => (
          <List.Item>
            <Text>{item.login} </Text>
          </List.Item>
        )}
      />
    </>
  );
};

export default FolowersList;
