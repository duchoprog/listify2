import React from 'react';
import { useState } from 'react/cjs/react.development';
import { useFetch } from '../hooks/useFetch';
import '../styles/ListLister.css'
import { ListItem } from './ListItem';

export const ListLister = ({token,UID}) => {
    const playlists = useFetch(`https://api.spotify.com/v1/users/${UID}/playlists`,{
        method:'GET',
        headers:{
          Authorization: 'Bearer '+ token
        }
      })
    
    const [selection, setSelection] = useState("lista");

    const handleSelect=(e)=>{
          console.log(e.target.value)
          setSelection(e.target.value)
      }
  return <div>
<h1>ListLister</h1>
<form >
  <label >Choose a list {selection}</label>
  <select 
        defaultValue={selection}
        name="listas" 
        id="listas" 
        className="form-select" 
        onChange={e => handleSelect(e)}

        >
      {playlists.data && playlists.data.items.map(list=>{
            return <ListItem id={list.id} name={list.name}/>
})}
  </select>
</form>
<div id="columnas">
<div className='columna' key="col1"></div>
<div className='columna' key="col2"></div>
<div className='columna' key="col3"></div>
</div>

  </div>;
};
