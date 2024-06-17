import React from "react";
import { TableCell } from "@/components/ui/table";
import { MdOutlineEdit } from "react-icons/md";

type Props = {
  taskId: string;
  setEditId: (arg: string) => void;
};

const EditTask = (props: Props) => {
  const handleEdit = (id: string) => {
    console.log(id, "item._id");
    props.setEditId(id);
  };
  return (
    <TableCell>
      <div onClick={() => handleEdit(props.taskId)}>
        <MdOutlineEdit />
      </div>
    </TableCell>
  );
};

export default EditTask;
