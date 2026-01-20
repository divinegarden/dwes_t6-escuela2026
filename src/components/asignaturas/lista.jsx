'use client'
import Link from 'next/link'
import { use } from 'react'
import Modal from '@/components/modal'
import Form from '@/components/asignaturas/form'
import { eliminarAsignatura, modificarAsignatura } from '@/lib/actions'
import { EditIcon, TrashIcon } from 'lucide-react'



export default function Lista({ promesaAsignaturas }) {

    const asignaturas = use(promesaAsignaturas)


    return (
        <div className='flex flex-wrap gap-10'>
            {asignaturas.map((asignatura) => <Item asignatura={asignatura} key={asignatura.id} />)}
        </div>
    )
}




function Item({ asignatura }) {

    return (
        <div className='border-pink-200 bg-pink-50 border-3 rounded-2xl p-3 mx-1'>
            <Link href={`/asignaturas/${asignatura.id}`} >   
                <p><span className='font-bold'>Asignatura:</span> {asignatura.nombre} </p>
                <p><span className='font-bold'>Profesor de la asignatura:</span> {asignatura.profesor}</p>
                <p><span className='font-bold'>{asignatura.horas_semana} horas a la semana</span></p> 
            </Link>

            <div className='flex gap-2 justify-end'>
                <Modal openElement={<EditIcon color='pink' size={32}
                    className='border border-yellow-200 rounded-full bg-yellow-50 p-2 cursor-pointer hover:text-pink-400'
                />}
                >   <h2>ACTUALIZAR ASIGNATURA</h2>
                    <Form action={modificarAsignatura} asignatura={asignatura} textSubmit="Actualizar" />
                </Modal>

                <Modal openElement={<TrashIcon color='pink' size={32}
                    className='border border-yellow-200 rounded-full bg-yellow-50 p-2 cursor-pointer hover:text-pink-400'
                />}
                >
                    <h2>ELIMINAR ASIGNATURA</h2>
                    <Form action={eliminarAsignatura} asignatura={asignatura} disabled={true} textSubmit="Eliminar" />
                </Modal>
            </div>
        </div>
    )
}