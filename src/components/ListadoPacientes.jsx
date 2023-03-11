import { Paciente } from "./Paciente";

export const ListadoPacientes = ({ pacientes }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:ml-5">
      <h3 className="font-black text-center text-2xl mb-1">
        Listado Pacientes
      </h3>
      <p className="text-center text-lg mb-5">
        Administra tus{" "}
        <span className="text-indigo-700 font-bold">Pacientes y Citas</span>
      </p>
      <div className="md:h-screen md:overflow-y-scroll mb-10">
        {/* Mostrar cada uno de los pacientes registrados en el listado */}
        {pacientes.map((paciente, index) => (
          <Paciente key={index} paciente={paciente} />
        ))}
      </div>
    </div>
  );
};
