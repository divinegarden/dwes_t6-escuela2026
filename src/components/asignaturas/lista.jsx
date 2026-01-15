'use client'
import Link from 'next/link'
import { use } from 'react'


export default function Lista({ promesaAsignaturas }) {

    const asignaturas = use(promesaAsignaturas)


    return (
        <div className='flex flex-wrap gap-10'>
            {asignaturas.map((asignatura) => <Item asignatura={asignatura} key={asignatura.id} />)}
            <button onClick={() => alert('hola')}>Boton</button>
        </div>
    )
}




function Item({ asignatura }) {

    return (
        <Link href={`/asignaturas/${asignatura.id}`} >
            <div className='bg-blue-100'>
                <p>Asignatura: {asignatura.nombre} </p>
                <p>Profesor de la asignatura: {asignatura.profesor}</p>
                <p>{asignatura.horas_semana} horas a la semana</p>
            </div>
        </Link>
    )
}