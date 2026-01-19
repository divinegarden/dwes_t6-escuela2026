'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from "next/cache"

// ------------------------- GRUPOS ------------------------- 

export async function insertarGrupo(formData){
    const nombre = formData.get('nombre');
    const tutor = formData.get('tutor');
    const aula = formData.get('aula');

    await prisma.grupo.create({
        data: {
            nombre,
            tutor,
            aula
        }
    })

    revalidatePath('/grupos');
}

export async function modificarGrupo(formData){
    const id = Number(formData.get('id'));
    const nombre = formData.get('nombre');
    const tutor = formData.get('tutor');
    const aula = formData.get('aula');

    await prisma.grupo.update({
        where: {id: id},
        data: {
            nombre,
            tutor,
            aula
        }
    })

    revalidatePath('/grupos');
}

export async function eliminarGrupo(formData){
    const id = Number(formData.get('id'));

    await prisma.grupo.delete({
        where: {id: id}
    })

    revalidatePath('/grupos');
}


// ------------------------- ASIGNATURAS ------------------------- 

export async function insertarAsignatura(formData){
    const nombre = formData.get('nombre');
    const profesor = formData.get('profesor');
    const horas_semana = formData.get('horas_semana');

    await prisma.asignatura.create({
        data: {
            nombre,
            profesor,
            horas_semana
        }
    })

    revalidatePath('/asignaturas');
}

export async function modificarAsignatura(formData){
    const id = Number(formData.get('id'));
    const nombre = formData.get('nombre');
    const profesor = formData.get('profesor');
    const horas_semana = formData.get('horas_semana');

    await prisma.asignatura.update({
        where: {id: id},
        data: {
            nombre,
            profesor,
            horas_semana
        }
    })

    revalidatePath('/asignaturas');
}

export async function eliminarAsignatura(formData){
    const id = Number(formData.get('id'));

    await prisma.asignatura.delete({
        where: {id: id}
    })

    revalidatePath('/asignaturas');
}

// ------------------------- ESTUDIANTES ------------------------- 

export async function insertarEstudiante(formData){
    const nombre = formData.get('nombre');
    const foto = formData.get('foto');
    const fecha_nacimiento = formData.get('fecha_nacimiento');
    const tutor_legal = formData.get('tutor_legal');

    await prisma.estudiante.create({
        data: {
            nombre,
            foto,
            fecha_nacimiento,
            tutor_legal
        }
    })

    revalidatePath('/estudiantes');
}

export async function modificarEstudiante(formData){
    const id = Number(formData.get('id'));
    const nombre = formData.get('nombre');
    const foto = formData.get('foto');
    const fecha_nacimiento = formData.get('fecha_nacimiento');
    const tutor_legal = formData.get('tutor_legal');

    await prisma.estudiante.update({
        where: {id: id},
        data: {
            nombre,
            foto,
            fecha_nacimiento,
            tutor_legal
        }
    })

    revalidatePath('/estudiantes');
}

export async function eliminarEstudiante(formData){
    const id = Number(formData.get('id'));

    await prisma.estudiante.delete({
        where: {id: id}
    })

    revalidatePath('/estudiantes');
}