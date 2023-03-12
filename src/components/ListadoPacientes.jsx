import { Paciente } from "./Paciente";

export const ListadoPacientes = ({ pacientes, handleSeleccionarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:ml-5">
      {pacientes && pacientes.length ? (
        <>
          <h3 className="font-black text-center text-2xl mb-1">
            Listado Pacientes
          </h3>
          <p className="text-center text-lg mb-5">
            Administra tus{" "}
            <span className="text-indigo-700 font-bold">Pacientes y Citas</span>
          </p>
          <div className="md:h-screen md:overflow-y-scroll mb-10">
            {/* Mostrar cada uno de los pacientes registrados en el listado - Es una mala práctica hacer uso del index del arreglo como valor del prop key */}
            {pacientes.map((paciente, index) => (
              <Paciente key={paciente.id} paciente={paciente} handleSeleccionarPaciente={handleSeleccionarPaciente} />
            ))}
          </div>
        </>
      ) : (
        <>
          <h3 className="font-black text-center text-2xl mb-1">
            No Hay Pacientes
          </h3>
          <p className="text-center text-lg mb-5">
            Comienza agregando pacientes y{" "}
            <span className="text-indigo-700 font-bold">
              aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};
