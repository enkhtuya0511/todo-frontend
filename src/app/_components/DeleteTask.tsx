import React from "react";
import { TableCell } from "@/components/ui/table";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDeleteTaskMutation } from "@/generated";

type Props = { taskId: string };

const DeleteTask = (props: Props) => {
  const [deleteTaskMutation, { loading }] = useDeleteTaskMutation();
  const handleDelete = async (id: string) => {
    try {
      console.log("handleDelete", id);
      const { data } = await deleteTaskMutation({
        variables: { deleteTaskTaskId2: id },
      });
      if (!loading) console.log("after delete: ", data);
    } catch (error) {
      console.error(error, "Error during deleting task");
    }
  };
  return (
    <TableCell>
      <div onClick={() => handleDelete(props.taskId)}>
        <RiDeleteBin5Line />
      </div>
    </TableCell>
  );
};

export default DeleteTask;
