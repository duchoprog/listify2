import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { ListLister } from './ListLister';

export const Lister = ({token}) => {

  const me = useFetch("https://api.spotify.com/v1/me",{
    method:'GET',
    headers:{
      Authorization: 'Bearer '+ token
    }
  })


  return <div><h2>Listify</h2>
  
  
  {me.data && <ListLister token={token} UID={me.data.id}/>}
  </div>;
};
