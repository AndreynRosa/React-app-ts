import React, { useState, useEffect, useCallback } from 'react';

import { Input, Form, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { repositoriesLoadRequest } from '../../store/ducks/repositories/actions';
import { folowersLoadRequest } from '../../store/ducks/folowers/actions';
import { userLoadRequest } from '../../store/ducks/users/actions';

const SerachUser: React.FC = () => {
  const [serachName, setSerachName] = useState(' ');
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();
  const dispatch = useDispatch();

  const dispatchRepositories = useCallback(() => {
    dispatch(repositoriesLoadRequest(serachName));
  }, [dispatch, serachName]);

  const dispatchFollowers = useCallback(() => {
    dispatch(folowersLoadRequest(serachName));
  }, [dispatch, serachName]);

  const dispatchUsers = useCallback(() => {
    dispatch(userLoadRequest(serachName));
  }, [dispatch, serachName]);

  const onFinish = () => {
    dispatchFollowers();
    dispatchRepositories();
    dispatchUsers();
  };

  useEffect(() => {
    forceUpdate({});
  }, []);
  return (
    <>
      <Form
        form={form}
        name="serach_form"
        layout="inline"
        style={{ margin: '5% 10%' }}
      >
        <Form.Item
          name="username"
          style={{ width: '300px' }}
          rules={[
            { required: true, message: 'Please input username to serach!' },
          ]}
        >
          <Input
            style={{ width: '100%' }}
            onChange={(e) => {
              setSerachName(e?.currentTarget.value);
            }}
            value={serachName}
            placeholder="Github username"
          />
        </Form.Item>
        <Form.Item shouldUpdate>
          <Button
            type="primary"
            htmlType="submit"
            onClick={onFinish}
            icon={<SearchOutlined />}
          >
            Search{' '}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SerachUser;
