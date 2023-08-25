const React = require('react');
const {useState} = require('react');
const { Link } = require('react-router-dom');
const client = require('../client');


const NuevoCursoPage = () => {

    const [nombre, setNombre] = useState('')
    const [categoria, setCategoria] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/cursos',
            entity: {nombre: nombre, categoria: categoria, descripcion: descripcion},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
            window.location = '/';
        })
    }

    return (
        <>
        <h1>Nuevo Curso</h1>
        <form onSubmit={handleSubmit}>
            <label>Nombre</label> <br />
            <input type="text" id='nombre' name='nombre' onChange={e=>setNombre(e.target.value)} /> <br />
            <label>Categoría</label> <br />
            <input type="text" id='categoria' name='categoria' onChange={e=>setCategoria(e.target.value)} /> <br />
            <label>Descripción</label> <br />
            <input type="text" id='descripcion' name='descripcion' onChange={e=>setDescripcion(e.target.value)} /> <br />
            <input type="submit" value="Nuevo Curso" />
        </form>
        <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoCursoPage;