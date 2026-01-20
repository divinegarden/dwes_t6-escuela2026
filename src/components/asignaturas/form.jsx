export default function Form({ action, asignatura, disabled = false, textSubmit = "Enviar" }) {

    return (
        <form className='flex gap-4' action={action}>
            <input type="text" 
                className='border-yellow-200 border-2 px-5 py-2 rounded-3xl' 
                name="nombre" 
                placeholder="Nombre"
                defaultValue={asignatura?.nombre}
                disabled={disabled}
            />
            <input type="text" 
                className='border-yellow-200 border-2 px-5 py-2 rounded-3xl' 
                name="profesor" 
                placeholder="Profesor"
                defaultValue={asignatura?.profesor}
                disabled={disabled}
            />
            <input type="number" 
                className='border-yellow-200 border-2 px-5 py-2 rounded-3xl' 
                name="horas_semana" 
                placeholder="Horas a la semana"
                defaultValue={asignatura?.horas_semana}
                disabled={disabled}
            />
            <button type="submit" className='text-yellow-200 border-yellow-200 border-2 px-5 py-2 rounded-3xl'>{textSubmit}</button>
        </form>
    )

}
