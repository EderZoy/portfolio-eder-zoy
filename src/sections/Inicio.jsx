import data from '../data/about.json';

export default function Inicio() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center">
      <img src={data.photo} alt="Foto de perfil" className="w-40 h-40 rounded-full" />
      <h1 className="text-4xl mt-4">{data.name}</h1>
      <p className="text-lg mt-2 max-w-xl">{data.description}</p>
    </section>
  );
}
