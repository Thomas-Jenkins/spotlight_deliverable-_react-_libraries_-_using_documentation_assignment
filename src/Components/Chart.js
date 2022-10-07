import { useState } from 'react';
import userData from '../users.json';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


export default function Chart() {
  const [data, setData] = useState(userData);
  // eslint-disable-next-line
  console.log(setData);
  let dataFirstName = data.map(a => a.first_name);
  // console.log('datafirstname: ', dataFirstName);
  let dataFirstLetter = []; 
  for (let i = 0; i < dataFirstName.length; i++) {
    dataFirstLetter.push(dataFirstName[i][0]);
  }
  // console.log(dataFirstLetter);
  let dataFirstLetterCount = {};
  for (let i = 0; i < dataFirstLetter.length; i++) {
    if (!dataFirstLetterCount[dataFirstLetter[i]])
      dataFirstLetterCount[dataFirstLetter[i]] = 0;
    ++dataFirstLetterCount[dataFirstLetter[i]];
  }
  // console.log(dataFirstLetterCount);
  
  let keys = Object.keys(dataFirstLetterCount);
  // console.log(keys);
  // let values = Object.values(dataFirstLetterCount);
  // console.log(values);

  let result = keys.map(key => ({
    ['letter']: key, ['count']: dataFirstLetterCount[key]
  }));
  // console.log(result);

  return (
    <LineChart width={600} height={300} data={ result }>
      <Line type="monotone" dataKey="count" />
      <CartesianGrid stroke="#CCC" />
      <XAxis dataKey="letter" />
      <YAxis dataKey=""/>
    </LineChart>
  );
}