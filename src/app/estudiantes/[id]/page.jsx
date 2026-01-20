import { obtenerEstudiante } from '@/lib/data'
import { Suspense } from 'react'


async function PaginaEstudiante({ params }) {
    const { id } = await params

    return (
        <div>
            <h1 className='bg-yellow-200 p-3 text-center text-white font-bold text-4xl'>Estudiante</h1>

            <Suspense fallback={<p className='text-2xl font-bold text-pink-200'>Cargando...</p>}>
                <Estudiante id={id} />
            </Suspense>

        </div>
    )
}

export default PaginaEstudiante



async function Estudiante({ id }) {
    const estudiante = await obtenerEstudiante(id)

    return (
        <div className='border-pink-200 bg-pink-50 border-3 rounded-2xl p-3 m-1'>
            <p><span className='font-bold'>Estudiante:</span> {estudiante.nombre} </p>
            <img
                src={estudiante.foto || '/user.png'}
                alt="foto"
                className='size-24 rounded-2xl'
            />
            <p><span className='font-bold'>Fecha de nacimiento:</span> {estudiante.fecha_nacimiento.toLocaleDateString()}</p>
            <p><span className='font-bold'>Tutor legal:</span> {estudiante.tutor_legal}</p>
        </div>
    )
}