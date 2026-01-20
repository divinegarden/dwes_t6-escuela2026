'use client'
import Link from 'next/link'
import { use } from 'react'
import Modal from '@/components/modal'
import Form from '@/components/estudiantes/form'
import { eliminarEstudiante, modificarEstudiante } from '@/lib/actions'
import { EditIcon, TrashIcon } from 'lucide-react'


export default function Lista({ promesaEstudiantes }) {

    const estudiantes = use(promesaEstudiantes)


    return (
        <div className='flex flex-wrap gap-10'>
            {estudiantes.map((estudiante) => <Item estudiante={estudiante} key={estudiante.id} />)}
        </div>
    )
}




function Item({ estudiante }) {

    return (
        <div className='border-pink-200 bg-pink-50 border-3 rounded-2xl p-3 mx-1'>
            <Link href={`/estudiantes/${estudiante.id}`} >
                <p><span className='font-bold'>Estudiante:</span> {estudiante.nombre} </p>
                <img src={estudiante.foto}/>
                <p><span className='font-bold'>Fecha de nacimiento:</span> {estudiante.fecha_nacimiento.toLocaleDateString()}</p>
                <p><span className='font-bold'>Tutor legal:</span> {estudiante.tutor_legal}</p>
            </Link>

            <div className='flex gap-2 justify-end'>
                <Modal openElement={<EditIcon color='pink' size={32}
                    className='border border-yellow-200 rounded-full bg-yellow-50 p-2 cursor-pointer hover:text-pink-400'
                />}
                >   <h2>ACTUALIZAR ESTUDIANTE</h2>
                    <Form action={modificarEstudiante} estudiante={estudiante} textSubmit="Actualizar" />
                </Modal>

                <Modal openElement={<TrashIcon color='pink' size={32}
                    className='border border-yellow-200 rounded-full bg-yellow-50 p-2 cursor-pointer hover:text-pink-400'
                />}
                >
                    <h2>ELIMINAR ESTUDIANTE</h2>
                    <Form action={eliminarEstudiante} estudiante={estudiante} disabled={true} textSubmit="Eliminar" />
                </Modal>
            </div>
        </div>
    )
}