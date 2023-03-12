import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { Formulario } from "./components/Formulario";
import { Header } from "./components/Header";
import { ListadoPacientes } from "./components/ListadoPacientes";

const initialState = () => {
  return JSON.parse(localStorage.getItem("pacientes")) ?? [];
}

function App() {
  // Estado que se comparte en varios componentes, debe ser declarado de en el nivel más alto
  // Estado para el listado de pacientes - datos recuperados desde localStorage
  const [pacientes, setPacientes] = useState(initialState);
  // Variable de estado para verificar si hay un paciente seleccionado para editar
  const [paciente, setPaciente] = useState({});

  // Efectos secundarios

  // Actualizar localStorage con la neuva información del listado de pacientes
  // cada vez que el listado de pacientes, guardar esos cambios en localStorage
  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

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
      paciente_state.id === paciente_modificado.id
        ? paciente_modificado
        : paciente_state
    );
    // Actualizar el estado con el nuevo listado de pacientes actualizado
    setPacientes(lista_pacientes_actualizados);
  };

  const handleEliminarPaciente = (id) => {
    // Confirmar que realmente se quiere eliminar el paciente, mediante la librería SweetAlert
    Swal.fire({
      title: "Estimado usuario",
      text: "Realmente deseas eliminar a este paciente",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // filtrar el listado de pacientes en el estado, para retirar el paciente con el id seleccionado
        const lista_pacientes_actualizados = pacientes.filter(
          (paciente_state) => paciente_state.id !== id
        );
        setPacientes(lista_pacientes_actualizados);
      }
    });
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
          handleEliminarPaciente={handleEliminarPaciente}
        />
      </div>
    </main>
  );
}

export default App;
