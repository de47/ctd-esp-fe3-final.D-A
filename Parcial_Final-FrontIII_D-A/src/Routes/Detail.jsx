import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  
  const [dentist, setDentist] = useState({})
  const params = useParams();

  const getDentistDetail = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const data = await res.json();
    setDentist(data)
  };

  useEffect(() => {
    getDentistDetail();
  }, [])

  return (
    <div>
      <h1>Detalles del dentista  {dentist.id} </h1>
      <div className='container'>
      <img className='doctor' src="../images/doctor.jpg" alt="doctor" width="100x" height="100px" />
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Sitio Web</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>{dentist.name}</td>
                <td>{dentist.email}</td>
                <td>{dentist.phone}</td>
                <td>{dentist.website}</td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Detail