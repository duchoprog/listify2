import React from 'react';

export const ListItem = ({id, name}) => {
  return <option value={id} key={id} onClick={()=>console.log(888)}>
 {name}82
  </option>;
};
