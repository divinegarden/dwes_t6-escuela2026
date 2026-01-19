import { insertarEstudiante } from '@/lib/actions'

export default function Form() {

    return (
        <form className='flex gap-4'action={insertarEstudiante}>
            <input type="text" className='border-yellow-200 border-2 px-5 py-2 rounded-3xl' name="nombre" placeholder="Nombre"/>
            <input type="file" className='border-yellow-200 border-2 px-5 py-2 rounded-3xl' name="foto" placeholder="Foto"/>
            <input type="date" className='border-yellow-200 border-2 px-5 py-2 rounded-3xl' name="fecha_nacimiento" placeholder="Fecha de Nacimiento"/>
            <input type="text" className='border-yellow-200 border-2 px-5 py-2 rounded-3xl' name="tutor_legal" placeholder="Tutor legal"/>
            <button type="submit" className='text-yellow-200 border-yellow-200 border-2 px-5 py-2 rounded-3xl'>Enviar</button>
        </form>
    )

}
