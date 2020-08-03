import React from 'react';
import { useSelector } from 'react-redux';

import RepositoryItem from '../RepositoryItem';

import {
  RepositoriesState,
  Repository,
} from '../../store/ducks/repositories/types';

interface RootState {
  repositories: RepositoriesState;
}

const RepositoryList: React.FC = () => {
  const repositoryList = useSelector((state: RootState) => state.repositories);

  return (
    <ul>
      {repositoryList.data.map((repositorysss: Repository) => (
        <RepositoryItem key={repositorysss.id} repository={repositorysss} />
      ))}
    </ul>
  );
};

export default RepositoryList;
