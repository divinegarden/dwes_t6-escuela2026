import { obtenerEstudiante } from '@/lib/data'
import { Suspense } from 'react'


async function PaginaEstudiante({ params }) {
    const { id } = await params

    return (
        <div>
            <h1 className='text-4xl'>Estudiante</h1>

            <Suspense fallback={<p className='text-2xl text-blue-300'>Cargando...</p>}>
                <Estudiante id={id} />
            </Suspense>

        </div>
    )
}

export default PaginaEstudiante



async function Estudiante({ id }) {
    const estudiante = await obtenerEstudiante(id)

    return (
        <>
            <p>Estudiante: {estudiante.nombre} </p>
            <img
                src={estudiante.foto || '/user.png'}
                alt="foto"
                className='size-24'
            />
            <p>Fecha de nacimiento: {estudiante.fecha_nacimiento.toLocaleDateString()}</p>
            <p>Tutor legal: {estudiante.tutor_legal}</p>
        </>
    )
}