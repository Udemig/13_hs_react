import { Button, Form, Modal } from "react-bootstrap";
import { inputs } from "../constants";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../redux/slices/taskSlice";

const TaskModal = ({ handleClose, show, task }) => {
  const dispatch = useDispatch();

  // form gönderilince
  const handleSubmit = (e) => {
    // sayfa yenilemeyi engelle
    e.preventDefault();

    // inputlardaki değerlere erişmenin en pratik yolu
    const formData = new FormData(e.target);

    // formdaki bütün verileri bir nesne haline getir
    const taskData = Object.fromEntries(formData.entries());

    // düzenleme modundaysak updateTask aksiyonunu
    // ekleme modundaysak addTask aksiyonunu çalıştır
    if (task) {
      // görevin güncellendiği reducer'a haber ver
      dispatch(updateTask({ id: task.id, ...taskData }));
    } else {
      // yeni görev eklendiğini reducer'a haber ver
      dispatch(addTask(taskData));
    }

    // modalı kapat
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{task ? "Görevi Düzenle" : "Görevi Oluştur"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {inputs.map((input, key) => (
            <Form.Group key={key} className="mb-3">
              <Form.Label>{input.label}</Form.Label>
              <Form.Control name={input.name} type={input.type} defaultValue={task && task[input.name]} />
            </Form.Group>
          ))}

          <Modal.Footer>
            <Button type="button" variant="secondary" onClick={handleClose}>
              Geri
            </Button>
            <Button type="submit" variant="primary">
              {task ? "Kaydet" : "Oluştur"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default TaskModal;
