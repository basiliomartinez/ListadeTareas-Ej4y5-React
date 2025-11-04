// src/components/ListaTareas.jsx

import ItemTarea from "./ItemTareas";

const ListaTareas = ({ arrayTareas, borrarTarea }) => {
return (
  <>
    {arrayTareas.length === 0 ? (
      <p className="text-muted">No hay tareas aún</p>
    ) : (
      <ul className="list-unstyled">
        {arrayTareas.map((tarea, indice) => (
          <ItemTarea
            key={indice}
            item={tarea}
            borrarTarea={borrarTarea}
          />
        ))}
      </ul>
    )}
  </>
);


};

export default ListaTareas;
