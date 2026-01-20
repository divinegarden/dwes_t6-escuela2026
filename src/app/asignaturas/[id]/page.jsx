import { obtenerAsignatura } from '@/lib/data'
import { Suspense } from 'react'


async function PaginaAsignatura({ params }) {
    const { id } = await params

    return (
        <div>
            <h1 className='bg-yellow-200 p-3 text-center text-white font-bold text-4xl'>Asignatura</h1>

            <Suspense fallback={<p className='text-2xl font-bold text-pink-200'>Cargando...</p>}>
                <Asignatura id={id} />
            </Suspense>

        </div>
    )
}

export default PaginaAsignatura



async function Asignatura({ id }) {
    const asignatura = await obtenerAsignatura(id)

    return (
        <div className='border-pink-200 bg-pink-50 border-3 rounded-2xl p-3 m-1'>
            <p><span className='font-bold'>Asignatura:</span> {asignatura.nombre} </p>
            <p><span className='font-bold'>Profesor de la asignatura:</span> {asignatura.profesor}</p>
            <p><span className='font-bold'>{asignatura.horas_semana} horas a la semana</span></p>
        </div>
    )
}