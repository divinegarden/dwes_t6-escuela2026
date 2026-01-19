import { insertarAsignatura } from '@/lib/actions'

export default function Form() {

    return (
        <form className='flex gap-4' action={insertarAsignatura}>
            <input type="text" className='border-yellow-200 border-2 px-5 py-2 rounded-3xl' name="nombre" placeholder="Nombre"/>
            <input type="text" className='border-yellow-200 border-2 px-5 py-2 rounded-3xl' name="profesor" placeholder="Profesor"/>
            <input type="number" className='border-yellow-200 border-2 px-5 py-2 rounded-3xl' name="horas_semana" placeholder="Horas a la semana"/>
            <button type="submit" className='text-yellow-200 border-yellow-200 border-2 px-5 py-2 rounded-3xl'>Enviar</button>
        </form>
    )

}
