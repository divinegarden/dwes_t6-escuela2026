import { obtenerGrupo } from '@/lib/data'
import { Suspense } from 'react'


async function PaginaGrupo({ params }) {
    const { id } = await params

    return (
        <div>
            <h1 className='text-4xl'>Grupo</h1>

            <Suspense fallback={<p className='text-2xl text-blue-300'>Cargando...</p>}>
                <Grupo id={id} />
            </Suspense>

        </div>
    )
}

export default PaginaGrupo



async function Grupo({ id }) {
    const grupo = await obtenerGrupo(id)

    return (
        <>
            <p>Nombre de grupo: {grupo.nombre} </p>
            <p>Tutor del grupo: {grupo.tutor}</p>
            <p>Aula {grupo.aula}</p>
        </>
    )
}