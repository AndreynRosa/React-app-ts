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
      <Row style={{ borderRight: '1px solid #40a9ff', height: '100%' }}>
        {usersList.data[0]?.name ? (
          <>
            <Col span={24} style={{ margin: 0, height: '50px' }}>
              <Title
                level={4}
                style={{
                  textAlignLast: 'center',
                }}
              >
                {usersList.data[0]?.name ? usersList.data[0]?.name : ' '}
              </Title>
            </Col>
            <Col span={24}>
              <AntdAvatar
                size={130}
                src={usersList.data[0]?.avatar}
                style={{ margin: '0% 30%' }}
              />
            </Col>
            <Col
              span={24}
              style={{ display: 'inline-grid', marginLeft: '20%' }}
            >
              <Text>
                {usersList.data[0]?.following
                  ? `Following: ${usersList.data[0]?.following}`
                  : ''}
              </Text>

              <Text>
                {usersList.data[0]?.public_gists
                  ? ` Gits: ${usersList.data[0]?.public_gists.toString()}`
                  : ''}
              </Text>

              {usersList?.data[0]?.organizations.map((organzation) => {
                if (organzation) {
                  return <Text code>{organzation.toString()}</Text>;
                }
                return <> </>;
              })}
            </Col>{' '}
          </>
        ) : (
          ''
        )}
      </Row>
    </>
  );
};

export default Avatar;
