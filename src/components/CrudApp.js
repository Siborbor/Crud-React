import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDB = [
    {
        id:1,
        name: "Seiya",
        constellation: "Pegaso",
    },
    {
        id:2,
        name: "Shiryu",
        constellation: "Dragon",
    },
    {
        id:3,
        name: "Hyoga",
        constellation: "Cisne",
    },
    {
        id:4,
        name: "Shun",
        constellation: "Andromeda",
    },
    {
        id:5,
        name: "ikki",
        constellation: "Fenix",
    },

]


const CrudApp = () => {
    const [db, setDb] = useState(initialDB)
    const [datatoedit, setDatatoedit] = useState(null)

    const createData = (data) => {
        data.id = Date.now();
        setDb([...db, data])
    }

    const updateData = (data) => {
        let newData = db.map(el => el.id === data.id ? data : el);
        setDb(newData);
    }

    const deleteData = (id) => {
        let isDelete = window.confirm(
            `Desea eliminar el registro? con id : '${id}' `)
        
        if(isDelete){
            let newData = db.filter(el => el.id !== id);
            setDb(newData);
        }else{
            return;
        }
    }

    
    return (
    <div>
        <h2>CRUD App</h2>
        <CrudForm 
        createData ={createData} 
        updateData={updateData} 
        datatoedit={datatoedit} 
        setDatatoedit={setDatatoedit}
        />
        <CrudTable 
        data={db} 
        deleteData={deleteData} 
        setDatatoedit={setDatatoedit}
        />
    </div>
  )
}

export default CrudApp;
