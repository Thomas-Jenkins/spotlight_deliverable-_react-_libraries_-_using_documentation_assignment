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
    <>
      <div className="mr-56 ml-10 shadows-xs bg-blue-200">
        This chart shows the number of times each letter appears in the first name of each data point. To make this data readable in the chart library I first mapped through the data and set the first name of each person to a new array. Next I declared a new array and then for each entry I found the first letter and pushed it to the new array. Then, I looped through the array and any time the loop encountered a new letter it added it to an object as a key and set the value to 1. any time it encountered a letter that was already in the object it incremented the key value pair. Finally I pulled the keys into a new array and mapped through them assigning new keys called letter and count and applying the letters and their respective counts to the new keys. This allowed me to input the data into the chart library and render it to the screen as demonstrated below. The conclusion that has allowed me to assert is that the letter C is the most common letter that a persons name will start with. At least in the english language. <br></br> -Thank you for coming to my TEDTalk.
      </div>
      <LineChart width={600} height={300} data={ result }>
        <Line type="monotone" dataKey="count" />
        <CartesianGrid stroke="#CCC" />
        <XAxis dataKey="letter" />
        <YAxis dataKey=""/>
      </LineChart>
    </>
  );
}