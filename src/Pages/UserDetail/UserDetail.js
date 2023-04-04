import React, { useEffect, useState } from 'react';
import CardUser from '../../components/CardUser/CardUser';
import axios from 'axios';

import { useParams } from 'react-router-dom';

const UserDetail = () => {
  
  const [user, setUser] = useState({});

  let { id } = useParams();

useEffect(() => {
  axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => setUser(res.data)
  );
}, [id]);

  return (
    <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
      <h1>User detail</h1>
      <CardUser data={ user } />
    </div>
  )
}

export default UserDetail;
