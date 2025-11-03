// src/App.jsx
import FormularioTarea from "./componentes/FormularioTarea";

const App = () => {
  return (
    <>
      <main className="container py-5">
        <section className="mx-auto" style={{maxWidth: 520}}>
          <h1 className="display-5 text-center mb-3">Bienvenido</h1>
          <p className="lead text-center">Ingresa tus tareas</p>

          {/* Aqui agrego el resto de los componentes */}
          <FormularioTarea />
        </section>
      </main>
    </>
  );
};

export default App;
