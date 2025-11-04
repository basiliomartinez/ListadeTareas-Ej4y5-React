// src/components/FormularioTarea.jsx

import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListaTareas from "./ListaTareas";

const FormularioTarea = () => {
  // STATE
  const [tarea, setTarea] = useState("");
  const [arrayTareas, setArrayTareas] = useState([]);

  // =============== FUNCIONES ===============

  // 1) Agregar tarea cuando envío el form
  const handleSubmit = (e) => {
    e.preventDefault(); // para que no recargue la página

    const nombre = tarea.trim(); // limpio espacios
    if (!nombre) return; // si está vacío, no hago nada

    // agrego la tarea al array
    setArrayTareas([...arrayTareas, nombre]);

    // limpio el input
    setTarea("");
  };

  // 2) Borrar tarea (después la usamos en el hijo)
  const borrarTarea = (nombreTarea) => {
    const arrayFiltrado = arrayTareas.filter(
      (tarea) => tarea !== nombreTarea
    );
    setArrayTareas(arrayFiltrado);
  };

return (
  <section>
    {/* FORMULARIO */}
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

    {/* LISTA DE TAREAS */}
    <ListaTareas
      arrayTareas={arrayTareas}
      borrarTarea={borrarTarea}
    />
  </section>
);

};

export default FormularioTarea;
