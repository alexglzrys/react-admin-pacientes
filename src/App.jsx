import { Formulario } from "./components/Formulario";
import { Header } from "./components/Header";
import { ListadoPacientes } from "./components/ListadoPacientes";

function App() {
  return (
    <main className="container mx-auto h-full">
      <Header />
      <div className="md:flex">
        <Formulario />
        <ListadoPacientes />
      </div>
    </main>
  );
}

export default App;
