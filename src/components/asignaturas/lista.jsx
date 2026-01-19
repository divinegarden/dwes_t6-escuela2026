'use client'
import Link from 'next/link'
import { use } from 'react'


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
        <Link href={`/asignaturas/${asignatura.id}`} >
            <div className='border-pink-200 bg-pink-50 border-3 rounded-2xl p-3 mx-1'>
                <p><span className='font-bold'>Asignatura:</span> {asignatura.nombre} </p>
                <p><span className='font-bold'>Profesor de la asignatura:</span> {asignatura.profesor}</p>
                <p><span className='font-bold'>{asignatura.horas_semana} horas a la semana</span></p>
            </div>
        </Link>
    )
}