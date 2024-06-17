import React from "react";
import { TableCell } from "@/components/ui/table";
import { FiSave } from "react-icons/fi";
import { useUpdateTaskMutation, UpdateTaskInput } from "@/generated";

type Props = {
  input: UpdateTaskInput;
  setInput: (input: UpdateTaskInput) => void;
  taskId: string;
  setEditId: (arg: string) => void;
};

const UpdateTask = (props: Props) => {
  const [updateTaskMutation, { loading }] = useUpdateTaskMutation();
  const handleSave = async (id: string) => {
    try {
      console.log("id", id, props.input);
      const { data } = await updateTaskMutation({
        variables: { updateTaskInput: { ...props.input, _id: id } },
      });
      if (!loading) {
        console.log("after update: ", data);
        props.setEditId("");
        props.setInput({ task: "", subject: "", priority: "", _id: "" });
      }
    } catch (error) {
      console.error("Error during updating Task", error);
    }
  };
  return (
    <TableCell>
      <div onClick={() => handleSave(props.taskId)}>
        <FiSave />
      </div>
    </TableCell>
  );
};

export default UpdateTask;
