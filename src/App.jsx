import { useState } from "react";
import { Formulario } from "./components/Formulario";
import { Header } from "./components/Header";
import { ListadoPacientes } from "./components/ListadoPacientes";

function App() {
  // Estado que se comparte en varios componentes, debe ser declarado de en el nivel más alto
  // Estado para el listado de pacientes
  const [pacientes, setPacientes] = useState([]);
  // Variable de estado para verificar si hay un paciente seleccionado para editar
  const [paciente, setPaciente] = useState({});

  // Controlador para agregar un nuevo paciente al listado
  const handleAgregarPaciente = (nuevo_paciente) => {
    setPacientes([...pacientes, nuevo_paciente]);
  };

  const handleSeleccionarPaciente = (paciente_seleccionado) => {
    setPaciente(paciente_seleccionado);
  };

  const handleActualizarPaciente = (paciente_modificado) => {
    // Mapear el listado de pacientes en el estado, y reemplazar el paciente editado con la nueva información
    const lista_pacientes_actualizados = pacientes.map((paciente_state) =>
      paciente.id === paciente_modificado.id ? paciente_modificado : paciente_state
    );
    // Actualizar el estado con el nuevo listado de pacientes actualizado
    setPacientes(lista_pacientes_actualizados);
  };

  return (
    <main className="container mx-auto h-full">
      <Header />
      <div className="md:flex">
        <Formulario
          handleAgregarPaciente={handleAgregarPaciente}
          handleActualizarPaciente={handleActualizarPaciente}
          paciente={paciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          handleSeleccionarPaciente={handleSeleccionarPaciente}
        />
      </div>
    </main>
  );
}

export default App;
