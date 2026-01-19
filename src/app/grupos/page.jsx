import Lista from '@/components/grupos/lista'
import Form from '@/components/grupos/form'
import Modal from '@/components/modal'
import { obtenerGrupos } from '@/lib/data'
import { Suspense } from 'react'
import { insertarGrupo } from '@/lib/actions'


async function PaginaGrupos() {
    const promesaGrupos = obtenerGrupos()


    return (
        <div>
            <h1 className='bg-yellow-200 p-3 text-center text-white font-bold text-4xl'>Grupos</h1>

            <Modal openElement={<button className='text-yellow-200 border-yellow-200 border-2 px-5 py-2 rounded-3xl my-3 mx-1'>Añadir grupo</button>}>
                <Form action={insertarGrupo}/>
            </Modal>

            <Suspense fallback={<p className='text-2xl font-bold text-pink-200'>Cargando...</p>}>
                <Lista
                    promesaGrupos={promesaGrupos}
                    
                />
            </Suspense>

        </div>
    )
}

export default PaginaGrupos