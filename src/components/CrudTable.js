import React from 'react'
import Crudtablerow from './Crudtablerow'

const CrudTable = ({data, deleteData, setDatatoedit}) => {
  return (
    <div>
        <h3>Tabla de datos</h3>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Constelacion</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {data.length === 0 ? 
                    <tr><td coldSpan="3">Sin datos</td></tr> : 
                    data.map(el => 
                    <Crudtablerow 
                    key= {el.id} 
                    el= {el} 
                    deleteData={deleteData}
                    setDatatoedit={setDatatoedit}></Crudtablerow>
                    ) }
            </tbody>
        </table>
    </div>
  )
}

export default CrudTable