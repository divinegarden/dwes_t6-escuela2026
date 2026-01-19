import Lista from '@/components/estudiantes/lista'
import Form from '@/components/estudiantes/form'
import Modal from '@/components/modal'
import { obtenerEstudiantes } from '@/lib/data'
import { Suspense } from 'react'
import { insertarEstudiante } from '@/lib/actions'


async function PaginaEstudiantes() {
    const promesaEstudiantes = obtenerEstudiantes()


    return (
        <div>
            <h1 className='bg-yellow-200 p-3 text-center text-white font-bold text-4xl'>Estudiantes</h1>

            <Modal openElement={<button className='text-yellow-200 border-yellow-200 border-2 px-5 py-2 rounded-3xl my-3 mx-1'>Añadir estudiante</button>}>
                <Form action={insertarEstudiante}/>
            </Modal>
            <Suspense fallback={<p className='text-2xl font-bold text-pink-200'>Cargando...</p>}>
                <Lista
                    promesaEstudiantes={promesaEstudiantes}
                />
            </Suspense>

        </div>
    )
}

export default PaginaEstudiantes