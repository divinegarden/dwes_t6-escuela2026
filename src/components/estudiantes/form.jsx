export default function Form({ action, estudiante, disabled = false, textSubmit = "Enviar" }) {

    return (
        <form className='flex gap-4'action={action}>
            <input type="text" 
                className='border-yellow-200 border-2 px-5 py-2 rounded-3xl' 
                name="nombre" 
                placeholder="Nombre"
                defaultValue={estudiante?.nombre}
                disabled={disabled}
            />
            <input type="file" 
                className='border-yellow-200 border-2 px-5 py-2 rounded-3xl' 
                name="foto" 
                placeholder="Foto"
                defaultValue={estudiante?.foto}
                disabled={disabled}
            />
            <input type="date" 
                className='border-yellow-200 border-2 px-5 py-2 rounded-3xl' 
                name="fecha_nacimiento" 
                placeholder="Fecha de Nacimiento"
                defaultValue={estudiante?.fecha_nacimiento}
                disabled={disabled}
            />
            <input type="text" 
                className='border-yellow-200 border-2 px-5 py-2 rounded-3xl' 
                name="tutor_legal" 
                placeholder="Tutor legal"
                defaultValue={estudiante?.tutor_legal}
                disabled={disabled}
            />
            <button type="submit" className='text-yellow-200 border-yellow-200 border-2 px-5 py-2 rounded-3xl'>{textSubmit}</button>
        </form>
    )

}
