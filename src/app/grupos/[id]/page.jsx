import { obtenerGrupo } from '@/lib/data'
import { Suspense } from 'react'


async function PaginaGrupo({ params }) {
    const { id } = await params

    return (
        <div>
            <h1 className='bg-yellow-200 p-3 text-center text-white font-bold text-4xl'>Grupo</h1>

            <Suspense fallback={<p className='text-2xl font-bold text-pink-200'>Cargando...</p>}>
                <Grupo id={id} />
            </Suspense>

        </div>
    )
}

export default PaginaGrupo



async function Grupo({ id }) {
    const grupo = await obtenerGrupo(id)

    return (
        <div className='border-pink-200 bg-pink-50 border-3 rounded-2xl p-3 m-1'>
            <p><span className='font-bold'>Nombre de grupo:</span> {grupo.nombre} </p>
            <p><span className='font-bold'>Tutor del grupo:</span> {grupo.tutor}</p>
            <p><span className='font-bold'>Aula {grupo.aula}</span></p>
        </div>
    )
}