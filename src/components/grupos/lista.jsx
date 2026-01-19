'use client'
import Link from 'next/link'
import { use } from 'react'
import Modal from '@/components/modal'
import Form from '@/components/grupos/form'
import { eliminarGrupo, modificarGrupo } from '@/lib/actions'
import { EditIcon, TrashIcon } from 'lucide-react'

export default function Lista({ promesaGrupos }) {

    const grupos = use(promesaGrupos)


    return (
        <div className='flex flex-wrap gap-10'>
            {grupos.map((grupo) => <Item grupo={grupo} key={grupo.id} />)}
        </div>
    )
}


function Item({ grupo }) {

    return (
        <div className='border-pink-200 bg-pink-50 border-3 rounded-2xl p-3 mx-1'>
            <Link href={`/grupos/${grupo.id}`} >
                <p><span className='font-bold'>Nombre de grupo:</span> {grupo.nombre} </p>
                <p><span className='font-bold'>Tutor del grupo:</span> {grupo.tutor}</p>
                <p><span className='font-bold'>Aula {grupo.aula}</span></p>
            </Link>
            <div className='flex gap-2 justify-end'>
                <Modal openElement={<EditIcon color='pink' size={32}
                    className='border border-yellow-200 rounded-full bg-yellow-50 p-2 cursor-pointer hover:text-pink-400'
                />}
                >   <h2>ACTUALIZAR GRUPO</h2>
                    <Form action={modificarGrupo} grupo={grupo} textSubmit="Actualizar" />
                </Modal>

                <Modal openElement={<TrashIcon color='pink' size={32}
                    className='border border-yellow-200 rounded-full bg-yellow-50 p-2 cursor-pointer hover:text-pink-400'
                />}
                >
                    <h2>ELIMINAR GRUPO</h2>
                    <Form action={eliminarGrupo} grupo={grupo} disabled={true} textSubmit="Eliminar" />
                </Modal>
            </div>
        </div>

    )
}