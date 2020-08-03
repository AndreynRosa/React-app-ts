import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RepositoryItem from '../RepositoryItem';

import {
  RepositoriesState,
  Repository,
} from '../../store/ducks/repositories/types';

interface RootState {
  repositories: RepositoriesState;
}

const RepositoryList: React.FC = () => {
  const [serching, setSerching] = useState(false);
  const repositoryList = useSelector((state: RootState) => state.repositories);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!serching) {
  //     setSerching(true);
  //   }
  // }, [dispatch, repositoryList, serching]);
  return (
    <ul>
      {repositoryList.data.map((repositorysss: Repository) => (
        <RepositoryItem key={repositorysss.id} repository={repositorysss} />
      ))}
    </ul>
  );
};

export default RepositoryList;
