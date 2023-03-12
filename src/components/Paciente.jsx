export const Paciente = ({ paciente, handleSeleccionarPaciente, handleEliminarPaciente }) => {
  // destructurar las propiedades del objeto paciente
  const { id, mascota, propietario, email, registro, sintomas } = paciente;
  return (
    <div className="bg-white rounded-md py-10 px-5 shadow-sm mb-4">
      <p className="font-bold uppercase mb-3 text-gray-700">
        Mascota: <span className="font-normal normal-case">{mascota}</span>
      </p>
      <p className="font-bold uppercase mb-3 text-gray-700">
        Propietario:{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold uppercase mb-3 text-gray-700">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold uppercase mb-3 text-gray-700">
        Fecha Registro:{" "}
        <span className="font-normal normal-case">{registro}</span>
      </p>
      <p className="font-bold uppercase mb-3 text-gray-700">
        Síntomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="mt-6 flex justify-between">
        <button
          type="button"
          className="uppercase bg-indigo-700 text-white p-2 w-32 rounded-md"
          onClick={() => handleSeleccionarPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="uppercase bg-red-700 text-white p-2 w-32 rounded-md"
          onClick={() => handleEliminarPaciente(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
