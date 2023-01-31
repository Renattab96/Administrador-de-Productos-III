import React, {useEffect,useState} from 'react'
import Formulario  from '../component/Formulario'
import Listaproducto from '../component/Listaproducto';
import axios from 'axios';


const Main = () => {

    const [producto,setTitulo]= useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/prodcutos')
        .then(res=>setTitulo(res.data))
        .catch(err=>console.log("Error:", err))

    },[])
 return (
    <>
    <Formulario/>
    <Listaproducto producto={producto} />

    </>
   
  )
}


export default Main;