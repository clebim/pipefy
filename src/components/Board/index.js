import React from 'react';

import List from '../List/index';
import { loadLists } from '../../services/api';
import { Container } from './styles';

const Lists = loadLists();

export default function Board() {
  return (
    <Container>
      {Lists.map(list => <List key={list.tilte} data={list} />)}

    </Container>
  );
}
