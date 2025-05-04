import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/slices/taskSlice";
import TaskModal from "./task-modal";
import { useState } from "react";

const TableRow = ({ task }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleDelete = () => {
    // kullanıcı onaylamazsa fonksiyonu durdur
    if (!confirm("Silmek istediğinizden emin misiniz?")) return;

    // reducer'a görev silme aksiyonunu gönder
    dispatch(deleteTask(task.id));
  };

  return (
    <>
      <tr>
        <td>{task.title}</td>

        <td>{task.author}</td>

        <td>{task.assigned}</td>

        <td>
          {new Date(task.end_date).toLocaleDateString("tr", {
            day: "2-digit",
            month: "short",
          })}
        </td>

        <td className="d-flex">
          <Button onClick={handleOpen} size="sm" className="me-1">
            Dzn
          </Button>
          <Button onClick={handleDelete} size="sm" variant="danger">
            Sil
          </Button>
        </td>
      </tr>

      <TaskModal handleClose={handleClose} show={show} task={task} />
    </>
  );
};

export default TableRow;
