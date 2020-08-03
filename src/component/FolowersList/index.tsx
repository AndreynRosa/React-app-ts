import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FollowersState, Followers } from '../../store/ducks/folowers/types';
import FolowersItem from '../FolowersItem';

// import { Container } from './styles';
interface RootState {
  folowers: FollowersState;
}

const FolowersList: React.FC = () => {
  const [serching, setSerching] = useState(false);
  const folowerList = useSelector((state: RootState) => state.folowers);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!serching) {
      setSerching(true);
    }
  }, [dispatch, folowerList, serching]);
  return (
    <>
      <ul>
        {folowerList.data.map((folower: Followers) => (
          <FolowersItem folowers={folower} />
        ))}
      </ul>
    </>
  );
};

export default FolowersList;
