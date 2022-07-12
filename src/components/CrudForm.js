import React, { useEffect,useState } from 'react';

const initialForm = {
    name:"",
    constellation : "",
    id:null,
}

const CrudForm = ({createData, updateData, datatoedit, setDatatoedit}) => {
    const [form, setForm] = useState(initialForm);

    useEffect(()=>{
        if(datatoedit){
            setForm(datatoedit);

        }else {
            setForm(initialForm)
        }
    }, [datatoedit])
    
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault(); //para que no se procese automaticamente
        
        if(!form.name || !form.constellation){
        alert('datos incompletos')
        return;
        }

        if(form.id === null){
            createData(form);
        }else {
            updateData(form);
    }}

    const handleReset = (e) => {
        setForm(initialForm);
        setDatatoedit(null)
    }

    return (
    <div>
        <h3>{datatoedit ? "Editar" : "Agregar"}</h3>
        <form onSubmit= {handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder='Nombre'
                onChange={handleChange}
                value = {form.name}
            ></input>
            <input
                type="text"
                name="constellation"
                placeholder='Constelacion'
                onChange={handleChange}
                value={form.constellation}
            ></input>
            <input
                type="submit"
                value="Enviar"
            ></input>
            <input
                type="reset"
                value="Limpiar"
                onClick={handleReset}
            ></input>
        </form>
    </div>
  )
}

export default CrudForm