import { useState } from 'react';
import { Table as Rtable, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';

import rawData from '../users.json';


export default function Table() {
  const [data, setData] = useState(rawData);
  
  return (
    <Rtable data={data}>
      <Column width={45}>
        <HeaderCell>ID</HeaderCell>
        <Cell dataKey="id" />
      </Column>
      <Column flexGrow>
        <HeaderCell>first_name</HeaderCell>
        <Cell dataKey="first_name"/>
      </Column>
      <Column flexGrow>
        <HeaderCell>last_name</HeaderCell>
        <Cell dataKey="last_name" />
      </Column>
      <Column flexGrow>
        <HeaderCell>email</HeaderCell>
        <Cell dataKey='email'/>
      </Column>
    </Rtable>
  );
}