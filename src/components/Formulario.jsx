import { useEffect, useState } from "react";
import { Error } from "./Error";

export const Formulario = ({ handleAgregarPaciente, handleActualizarPaciente, paciente }) => {
  // Declaración del estado de cada input del formulario
  const [mascota, setMascota] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [registro, setRegistro] = useState("");
  const [sintomas, setSintomas] = useState("");

  // variable de estado para los errores de formulario
  const [error, setError] = useState(false);

  // Efecto secundario para llenar el formulario si hay un paciente seleccionado para proceder a editarlo
  useEffect(() => {
    // Verificar si el objeto paciente tiene información
    if (Object.keys(paciente).length > 0) {
      llenarFormulario(paciente);
    }
  }, [paciente]);

  // controlador de envio de formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if ([mascota, propietario, email, registro, sintomas].includes("")) {
      setError(true);
      return false;
    }

    // Generar objeto paciente y Agregarlo en el listado
    const nuevo_paciente = {
      mascota,
      propietario,
      email,
      registro,
      sintomas,
    };

    // Verificar si se trata de un registro o una actualización de paciente
    if (paciente.id) {
      nuevo_paciente.id = paciente.id;
      handleActualizarPaciente(nuevo_paciente);
    } else {
      nuevo_paciente.id = generarId();
      handleAgregarPaciente(nuevo_paciente);
    }
    handleLimpiarFormulario();
  };

  const handleLimpiarFormulario = () => {
    setMascota("");
    setPropietario("");
    setEmail("");
    setRegistro("");
    setSintomas("");
    setError(false);
  };

  const generarId = () => {
    // Generar en base hexadecimal un número random y el timestamp
    const random = Math.random().toString(16).substring(2);
    const timestamp = Date.now().toString(16);
    return random + timestamp;
  };  

  const llenarFormulario = (paciente) => {
    setMascota(paciente.mascota);
    setPropietario(paciente.propietario);
    setEmail(paciente.email);
    setRegistro(paciente.registro);
    setSintomas(paciente.sintomas);
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h3 className="font-black text-center text-2xl mb-1">
        Seguimiento Pacientes
      </h3>
      <p className="text-center text-lg mb-5">
        Añade pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-md py-10 px-5 shadow-sm mb-10"
      >
        {/* Componente para mostrar mensajes de error */}
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}
        {/* Nombre de la mascota */}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block uppercase font-bold text-gray-700 mb-2"
          >
            Nombre Mascota
          </label>
          <input
            type="text"
            id="mascota"
            placeholder="Nombre de la mascota"
            className="w-full border-2 rounded-sm placeholder-gray-400 p-2"
            value={mascota}
            onChange={(e) => setMascota(e.target.value)}
          />
        </div>
        {/* Nombre del Propietario */}
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block uppercase font-bold text-gray-700 mb-2"
          >
            Nombre Propietario
          </label>
          <input
            type="text"
            id="propietario"
            placeholder="Nombre del Propietario"
            className="w-full border-2 rounded-sm placeholder-gray-400 p-2"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        {/* Email del Propietario */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block uppercase font-bold text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email de contacto"
            className="w-full border-2 rounded-sm placeholder-gray-400 p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* Fecha de registro */}
        <div className="mb-5">
          <label
            htmlFor="registro"
            className="block uppercase font-bold text-gray-700 mb-2"
          >
            Fecha de Registro
          </label>
          <input
            type="date"
            id="registro"
            className="w-full border-2 rounded-sm placeholder-gray-400 p-2"
            value={registro}
            onChange={(e) => setRegistro(e.target.value)}
          />
        </div>
        {/* Síntomas */}
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block uppercase font-bold text-gray-700 mb-2"
          >
            Síntomas
          </label>
          <textarea
            name=""
            id="sintomas"
            placeholder="Descripción detallada de los síntomas"
            className="w-full border-2 rounded-sm placeholder-gray-400 p-2"
            rows="4"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        {/* Botón de envio */}
        <button
          type="submit"
          className="w-full bg-indigo-800 text-white p-3 uppercase hover:bg-indigo-900 cursor-pointer transition-colors"
        >
          {paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        </button>
      </form>
    </div>
  );
};
