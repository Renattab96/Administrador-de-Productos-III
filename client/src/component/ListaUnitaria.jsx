import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { useParams, Link, Navigate, useNavigate} from 'react-router-dom'


const ListaUnitaria = () => {
    const [listaUnitaria, setListaUnitaria]=useState({});

    // obtener id de url
    const {id} = useParams()
  const navigate= useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:8000/api/producto/filtrar/${id}`,{
        })
        .then((res) => {
          console.log(res);
          setListaUnitaria(res.data);
          // navigate('/productos')
          }).catch((err) => {
             console.log(err)
          })
      },[])

  const Editar=(e)=>{
    navigate(`/editar/${id}`)
  }  
  
  const Eliminar =(e)=>{
    axios.delete(`http://localhost:8000/api/producto/borrar/${id}`)
        .then((res)=>{
            navigate('/formulario')
        }).catch((err)=>{
            console.log(err)
        })
  }
 
  return (
    <div className='col-xl-900 align-content-justify border:1px'>
        <br />
        <h1 > Detalle </h1>
        <hr className='text-decoration:none'/>
        <p> Titulo:  {listaUnitaria.title} </p>
        <p> Precio:  {listaUnitaria.price} </p>
        <p> Descripcion:  {listaUnitaria.descripcion}</p>
        <br />
        {/* <Link to={`/editar${listaUnitaria.id}`}/>Editar<Link/> */}
        <button  className='btn btn-success' type="submit" onClick={Editar}>Editar</button>
        <button  className='btn btn-danger' type="submit" onClick={Eliminar} >Eliminar</button>

    </div>
  )
}

export default ListaUnitaria