import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import TableRow from "./table-row";

const TaskTable = () => {
  const { tasks } = useSelector((store) => store.taskReducer);

  console.log(tasks);

  return (
    <Table striped hover bordered responsive>
      <thead>
        <tr>
          <th>Görev</th>
          <th>Yazan</th>
          <th>Atanan</th>
          <th>Tarih</th>
          <th>İşlemler</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, key) => (
          <TableRow key={key} task={task} />
        ))}
      </tbody>
    </Table>
  );
};

export default TaskTable;
