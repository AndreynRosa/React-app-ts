import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar as AntdAvatar, Row, Col, Typography } from 'antd';

import { UsersState } from '../../store/ducks/users/types';

interface RootState {
  users: UsersState;
}

const Avatar: React.FC = () => {
  const [serching, setSerching] = useState(false);
  const usersList = useSelector((state: RootState) => state.users);

  const dispatch = useDispatch();
  const { Title, Text } = Typography;
  useEffect(() => {
    if (!serching) {
      setSerching(true);
    }
  }, [dispatch, usersList, serching]);
  return (
    <>
      <Row>
        <Col span={24} style={{ alignItems: 'center' }}>
          <Title level={4}>
            {' '}
            {usersList.data[0]?.name
              ? usersList.data[0]?.name
              : 'eu aqui meu nome'}
          </Title>
        </Col>
        <Col span={24}>
          <AntdAvatar
            size={130}
            src={usersList.data[0]?.avatar}
            style={{ margin: '10% 30%' }}
          />
        </Col>
        <Col span={24}>
          <Text>
            {usersList.data[0]?.following
              ? `Following: ${usersList.data[0]?.following}`
              : 'bbbbbbbbbbbbbb'}
          </Text>
          <br />
          <Text>
            {usersList.data[0]?.public_gists
              ? ` Gits: ${usersList.data[0]?.public_gists.toString()}`
              : 'aaaaaaaa'}
          </Text>
        </Col>

        <Col span={24}>
          {usersList?.data[0]?.organizations.map((organzation) => {
            return <Text code>{organzation}</Text>;
          })}
        </Col>
      </Row>
    </>
  );
};

export default Avatar;
