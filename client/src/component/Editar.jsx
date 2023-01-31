import React, { useState } from 'react'
import '../styles/Formulario.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
// import Listaproducto from './Listaproducto'
import { useEffect } from 'react'


const Editar = () => {
  const [title, setProducto] = useState("");
  const [price, setPrecio] = useState();
  const [descripcion, setDescripcion] = useState("");
   
  const {id}=useParams()
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/producto/filtrar/${id}`)
        .then((res)=>{
            console.log(res)
            setProducto(res.data.title)
            setPrecio(res.data.price)
            setDescripcion(res.data.descripcion)
        }).catch((err) => {
            console.log(err)
          });
    },[])

  const SubmitHandler = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:8000/api/producto/edicion/${id}`, {
      title,
      price,
      descripcion
    }).then((res) => {
      console.log(res)
      navigate(`/listaunitaria/${id}`)
    }).catch((err) => {
      console.log(err)
    });
  }

  return (
    <div>
      <div className='ContenFormulario'>
        <h2>Producto Manager</h2>
        <form className='formData' onSubmit={SubmitHandler}>

          <div className='data'>
            <label htmlFor="">Title</label>
            <input type="text" className='form-control' value={title}  onChange={(e) => setProducto(e.target.value)} />
          </div>

          <div className='data'>
            <label htmlFor="">Price</label>
            <input type="number" className='form-control'value={price} onChange={(e) => setPrecio(e.target.value)} />
          </div>

          <div className='data'>
            <label htmlFor="">Descripcion</label>
            <input type="text" className='form-control'  value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
          </div>
          <br />
          <button className="btn btn-success mt-3" type="submit" >Guardar Cambios</button>
        </form>
      </div>  
    </div>
  )
}

export default Editar;