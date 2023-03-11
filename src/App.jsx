import { useState } from "react";
import { Formulario } from "./components/Formulario";
import { Header } from "./components/Header";
import { ListadoPacientes } from "./components/ListadoPacientes";

function App() {

  // Estado que se comparte en varios componentes, debe ser declarado de en el nivel más alto
  // Estado para el listado de pacientes
  const [pacientes, setPacientes] = useState([]);

  // Controlador para agregar un nuevo paciente al listado
  const handleAgregarPaciente = (nuevo_paciente) => {
    setPacientes([...pacientes, nuevo_paciente]);
  }

  return (
    <main className="container mx-auto h-full">
      <Header />
      <div className="md:flex">
        <Formulario handleAgregarPaciente={handleAgregarPaciente} />
        <ListadoPacientes pacientes={pacientes} />
      </div>
    </main>
  );
}

export default App;
