const React = require('react');
const {useState, useEffect} = require('react');
const { Link, useParams } = require('react-router-dom');
const client = require('../client');

const EditarCursoPage = ()=>{

    const [curso, setCurso] = useState({})
    let { id } = useParams();

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/cursos/'+id
        }).done((response)=>setCurso(response.entity))
    },[])

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/cursos/'+id,
            entity: curso,
            headers: {'Content-Type': 'application/json'}
        }).done(()=>window.location = '/')
    }

    return(
        <>
            <h1>Editar Curso</h1>

            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" id="nombre" name="nombre" value={curso.nombre} onChange={(e)=>setCurso({...curso, nombre: e.target.value})} /> <br/>
                <label>Categoria</label>
                <input type="text" id="categoria" name="categoria" value={curso.categoria} onChange={(e)=>setCurso({...curso, categoria: e.target.value})}  /> <br/>
                <label>Descripcion</label>
                <input type="text" id="descripcion" name="descripcion" value={curso.descripcion} onChange={(e)=>setCurso({...curso, descripcion: e.target.value})}  /> <br/>
                
                <input type="submit" value="Editar Curso" />
            </form>

        </>
    )
}

module.exports = EditarCursoPage