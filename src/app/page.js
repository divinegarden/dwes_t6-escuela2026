import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 text-pink-200 font-bold">
      <Link className='border-yellow-200 border-2 px-5 py-2 rounded-3xl' href="/grupos">Grupos</Link>
      <Link className='border-yellow-200 border-2 px-5 py-2 rounded-3xl' href="/asignaturas">Asignaturas</Link>
      <Link className='border-yellow-200 border-2 px-5 py-2 rounded-3xl' href="/estudiantes">Estudiantes</Link>
    </div>
  );
}
