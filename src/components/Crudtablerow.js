import React from 'react'

const Crudtablerow = ({el, deleteData, setDatatoedit }) => {
  let{name,constellation,id}=el
  
   return (
    <tr>
         <td>{name}</td>
         <td>{constellation}</td>
        <td>
           <button onClick={() => setDatatoedit(el)}>Editar</button>
           <button onClick={() => deleteData(id)}>Eliminar</button>
        </td>
     </tr>
  )
}

export default Crudtablerow