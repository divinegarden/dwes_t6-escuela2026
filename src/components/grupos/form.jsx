export default function Form({ action, grupo, disabled = false, textSubmit = "Enviar" }) {

    return (
        <form className='flex gap-4' action={action}>
            <input type="hidden" name="id" value={grupo?.id} />
            <input type="text" 
                className='border-yellow-200 border-2 px-5 py-2 rounded-3xl' 
                name="nombre" 
                placeholder="Nombre"
                defaultValue={grupo?.nombre}
                disabled={disabled}/>
            <input type="text" 
                className='border-yellow-200 border-2 px-5 py-2 rounded-3xl' 
                name="tutor" 
                placeholder="Tutor"
                defaultValue={grupo?.tutor}
                disabled={disabled}/>
            <input type="text" 
                className='border-yellow-200 border-2 px-5 py-2 rounded-3xl' 
                name="aula" 
                placeholder="Aula"
                defaultValue={grupo?.aula}
                disabled={disabled}/>
            <button type="submit" className='text-yellow-200 border-yellow-200 border-2 px-5 py-2 rounded-3xl'>{textSubmit}</button>
        </form>
    )

}
