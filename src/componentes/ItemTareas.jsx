// src/components/ItemTarea.jsx
import Button from "react-bootstrap/Button";

const ItemTarea = ({ item, borrarTarea }) => {
  return (
    <li className="d-flex justify-content-between align-items-center mb-2 border rounded px-3 py-2">
      <span>{item}</span>
      <Button
        variant="outline-secondary"
        size="sm"
        onClick={() => borrarTarea(item)}
      >
        ❌
      </Button>
    </li>
  );
};

export default ItemTarea;
