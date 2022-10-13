import { useState } from 'react';
import { Table as Rtable, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';

import rawData from '../users.json';


export default function Table() {
  const [data, setData] = useState(rawData);
  if (!data) {
    setData(rawData);
  }
  return (
    <>
      <div className="bg-orange-800">
        This table lists the first and last name as well as the email address for user data from the data file. 
      </div>
      <Rtable data={data} >
        <Column width={45} >
          <HeaderCell >ID</HeaderCell>
          <Cell dataKey="id" />
        </Column>
        <Column>
          <HeaderCell>first_name</HeaderCell>
          <Cell dataKey="first_name"/>
        </Column>
        <Column>
          <HeaderCell>last_name</HeaderCell>
          <Cell dataKey="last_name" />
        </Column>
        <Column flexGrow={100}>
          <HeaderCell>email</HeaderCell>
          <Cell dataKey='email'/>
        </Column>
      </Rtable>
    </>
  );
}