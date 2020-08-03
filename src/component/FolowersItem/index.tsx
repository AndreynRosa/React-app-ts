import React from 'react';
import { Followers } from '../../store/ducks/folowers/types';

// import { Container } from './styles';
interface OwnProps {
  folowers: Followers;
}

const FolowersItem: React.FC<OwnProps> = ({ folowers }: OwnProps) => {
  return <li>{folowers.login}</li>;
};

export default FolowersItem;
