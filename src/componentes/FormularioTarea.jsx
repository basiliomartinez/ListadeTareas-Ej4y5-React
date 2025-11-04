// src/components/FormularioTarea.jsx

import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListaTareas from "./ListaTareas";

const FormularioTarea = () => {
  // ==========================
  // 1️⃣ Leer del localStorage al iniciar
  // ==========================
  const tareasGuardadas = JSON.parse(localStorage.getItem("listaTareas")) || [];
  const [arrayTareas, setArrayTareas] = useState(tareasGuardadas);
  const [tarea, setTarea] = useState("");

  // ==========================
  // 2️⃣ Guardar en localStorage cada vez que cambia
  // ==========================
  useEffect(() => {
    localStorage.setItem("listaTareas", JSON.stringify(arrayTareas));
  }, [arrayTareas]);

  // ==========================
  // 3️⃣ Funciones
  // ==========================
  const handleSubmit = (e) => {
    e.preventDefault();

    const nombre = tarea.trim();
    if (!nombre) return;

    setArrayTareas([...arrayTareas, nombre]);
    setTarea("");
  };

  const borrarTarea = (nombreTarea) => {
    const arrayFiltrado = arrayTareas.filter((t) => t !== nombreTarea);
    setArrayTareas(arrayFiltrado);
  };

  // ==========================
  // 4️⃣ Render
  // ==========================
  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="inputTarea">
          <Form.Control
            type="text"
            placeholder="Tarea 1..."
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
          />
        </Form.Group>
      </Form>

      <ListaTareas arrayTareas={arrayTareas} borrarTarea={borrarTarea} />
    </section>
  );
};

export default FormularioTarea;
