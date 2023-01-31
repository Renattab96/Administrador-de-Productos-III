import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/ListaProducto.css'
import { Link } from 'react-router-dom';

const Listaproducto = () => {
  const [listas, setListas] = useState([]);          

      useEffect(() => {
        axios.get('http://localhost:8000/api/productos',)
        .then((res) => {
          console.log(res);
          setListas(res.data);
          // navigate('/productos')
          }).catch((err) => {
             console.log(err)
          })
      },[])
      
  return (
      <div className='listaProducto'>
         {
          listas.map((lista, index)=>(
            <div className='listaTitulo' key={index} >
              {/* <h2>{lista.title}</h2> */}
              <Link to={`/listaunitaria/${lista._id}`} >{lista.title}</Link>
              {/* <h2>{lista.price}</h2>
              <h2>{lista.descripcion}</h2> */}
            </div>
          ))
         } 
      </div>
  )
}

export default Listaproducto;