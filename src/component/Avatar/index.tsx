import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar as AntdAvatar, Row, Col } from 'antd';
import axios from 'axios';
import { UsersState } from '../../store/ducks/users/types';

interface RootState {
  users: UsersState;
}

const Avatar: React.FC = () => {
  const [serching, setSerching] = useState(false);
  const usersList = useSelector((state: RootState) => state.users);

  const [org, setOrg] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!serching) {
      setSerching(true);
    }
  }, [dispatch, usersList, serching]);
  return (
    <>
      {' '}
      <Row>
        <Col span={24}>
          <AntdAvatar size={100} src={usersList.data[0]?.avatar} />{' '}
        </Col>
        <Col span={24}>
          <ul>
            <li> {usersList.data[0]?.name}</li>
            <li>Following: {usersList.data[0]?.following}</li>
            <li>Gits: {usersList.data[0]?.public_gists}</li>
          </ul>
        </Col>

        <Col span={24}>
          <ul>
            {usersList?.data[0]?.organizations.map((organzation) => {
              return <li> {organzation}</li>;
            })}
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default Avatar;
