import Lista from '@/components/asignaturas/lista'
import Form from '@/components/asignaturas/form'
import Modal from '@/components/modal'
import { obtenerAsignaturas } from '@/lib/data'
import { Suspense } from 'react'
import { insertarAsignatura } from '@/lib/actions'


async function PaginaAsignaturas() {
    const promesaAsignaturas = obtenerAsignaturas()


    return (
        <div>
            <h1 className='bg-yellow-200 p-3 text-center text-white font-bold text-4xl'>Asignaturas</h1>
            
            <Modal openElement={<button className='text-yellow-200 border-yellow-200 border-2 px-5 py-2 rounded-3xl my-3 mx-1'>Añadir asignatura</button>}>
                <Form action={insertarAsignatura}/>
            </Modal>

            <Suspense fallback={<p className='text-2xl font-bold text-pink-200'>Cargando...</p>}>
                <Lista
                    promesaAsignaturas={promesaAsignaturas}
                />
            </Suspense>

        </div>
    )
}

export default PaginaAsignaturas