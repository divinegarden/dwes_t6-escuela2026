'use client'
import Link from 'next/link'
import { use } from 'react'


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
        <Link href={`/estudiantes/${estudiante.id}`} >
            <div className='border-pink-200 bg-pink-50 border-3 rounded-2xl p-3 mx-1'>
                <p><span className='font-bold'>Estudiante:</span> {estudiante.nombre} </p>
                <img src={estudiante.foto}/>
                <p><span className='font-bold'>Fecha de nacimiento:</span> {estudiante.fecha_nacimiento.toLocaleDateString()}</p>
                <p><span className='font-bold'>Tutor legal:</span> {estudiante.tutor_legal}</p>
            </div>
        </Link>
    )
}