import React, { useState } from 'react'
import '../styles/Formulario.css'
import axios from 'axios'
import { useNavigate, Routes, Route } from 'react-router-dom'
import Listaproducto from './Listaproducto'


const Formulario = () => {
  
  const [title, setProducto] = useState("");
  const [price, setPrecio] = useState();
  const [descripcion, setDescripcion] = useState("");
  
  const navigate = useNavigate()

  const SubmitHandler = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/crear/producto', {
      title,
      price,
      descripcion
    }).then((res) => {
      console.log(res)
      navigate('prueba')
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
            <input type="text" className='form-control'onChange={(e) => setProducto(e.target.value)} />
          </div>

          <div className='data'>
            <label htmlFor="">Price</label>
            <input type="number" className='form-control' onChange={(e) => setPrecio(e.target.value)} />
          </div>

          <div className='data'>
            <label htmlFor="">Descripcion</label>
            <input type="text" className='form-control' onChange={(e) => setDescripcion(e.target.value)} />
          </div>
          <br />
          <button className="btn btn-success" type="submit" >Crear</button>
        </form>
        <div className='datos'>  
        <hr />
          <h4>Todos Los Productos:</h4>
        </div>
      </div>
      <Routes>
        <Route path='prueba' element={<Listaproducto /> } />
      </Routes>
     
            
    </div>
  )
}

export default Formulario;