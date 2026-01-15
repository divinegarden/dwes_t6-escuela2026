import { obtenerAsignatura } from '@/lib/data'
import { Suspense } from 'react'


async function PaginaAsignatura({ params }) {
    const { id } = await params

    return (
        <div>
            <h1 className='text-4xl'>Asignatura</h1>

            <Suspense fallback={<p className='text-2xl text-blue-300'>Cargando...</p>}>
                <Asignatura id={id} />
            </Suspense>

        </div>
    )
}

export default PaginaAsignatura



async function Asignatura({ id }) {
    const asignatura = await obtenerAsignatura(id)

    return (
        <>
            <p>Asignatura: {asignatura.nombre} </p>
            <p>Profesor de la asignatura: {asignatura.profesor}</p>
            <p>{asignatura.horas_semana} horas a la semana</p>
        </>
    )
}