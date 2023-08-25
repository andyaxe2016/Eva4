const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const HomePage = require('./pages/home');
const NuevoAlumnoPage = require('./pages/nuevo-alumno');
const VerCursoPage = require('./pages/ver-curso');
const NuevoCursoPage = require('./pages/nuevo-curso');
const VerAlumnoPage = require('./pages/ver-alumno');
const EditarCursoPage = require('./pages/editar-curso');
const VerAulaPage = require('./pages/ver-aula');
const NuevoPabellonPage = require('./pages/nuevo-pabellon');


const router = createBrowserRouter([
	{ path: '/', element: <HomePage /> },
	{ path: '/ver-curso/:id', element: <VerCursoPage /> },
	{ path: '/nuevo-curso', element: <NuevoCursoPage /> },
	{ path: '/ver-alumno/:id', element: <VerAlumnoPage /> },
	{ path: '/nuevo-alumno', element: <NuevoAlumnoPage /> },
	{ path: '/editar-curso/:id', element: <EditarCursoPage /> },
	{ path: '/ver-aula/:id', element: <VerAulaPage /> },
	{ path: '/ver-aula/:id/nuevo-pabellon', element: <NuevoPabellonPage /> },


])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react'))
