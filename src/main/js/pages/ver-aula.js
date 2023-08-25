const React = require('react');
const { Link, useParams } = require('react-router-dom');
const { useState, useEffect } = require('react');
const client = require('../client');

const VerAulaPage = () => {

    let { id } = useParams();
    const [aula, setAula] = useState({});
    const [pabellones, setPabellones] = useState([]);

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/aulas/' + id
        }).done(response => setAula(response.entity))
        client({
            method: 'GET',
            path: '/api/aulas/' + id + '/formacion'
        }).done(response => setPabellones(response.entity))
    }, [])


    return (
        <>
            <h1>Ver Aula</h1>
            <hr />

            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{aula.nombre}</td>
                    </tr>
                </tbody>
            </table>
            <hr />

            <h2>Alumno por Curso</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Alumno</th>
                        <th>Curso</th>
                    </tr>
                </thead>
                <tbody>

                    {pabellones.map(pabellon=>{
                        return(
                            <tr key={pabellon.ID}>
                                <td>{pabellon.ALUMNO}</td>
                                <td>{pabellon.CURSO}</td>
                            </tr>
                        )
                    })}

                </tbody>

            </table>

            <hr />
            <Link to={`/ver-aula/${id}/nuevo-pabellon`}>Nuevo Pabellon</Link> |
            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerAulaPage;