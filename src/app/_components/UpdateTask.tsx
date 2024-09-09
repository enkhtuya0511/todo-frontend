import React from "react";
import { TableCell } from "@/components/ui/table";
import { FiSave } from "react-icons/fi";
import { useUpdateTaskMutation, UpdateTaskInput, useGetAllTodosQuery } from "@/generated";
import { useTodo } from "../_contexts/TodoContext";

type Props = {
  input: UpdateTaskInput;
  setInput: (input: UpdateTaskInput) => void;
  taskId: string;
  setEditId: (arg: string) => void;
};

const UpdateTask = (props: Props) => {
  const { userId } = useTodo();
  const { refetch } = useGetAllTodosQuery({ variables: { userId: userId } });
  const [updateTaskMutation] = useUpdateTaskMutation();
  const handleSave = async (id: string) => {
    try {
      // if (props.input) {
      //   await updateTaskMutation({
      //     variables: { updateTaskInput: { ...props.input, _id: id } },
      //   });
      //   refetch();
      // }
      // Ensure input fields are not empty before updating
      if (props.input.task?.trim() !== "" || props.input.subject?.trim() !== "") {
        await updateTaskMutation({
          variables: { updateTaskInput: { ...props.input, _id: id } },
        });
        await refetch();
      }
      props.setEditId("");
      props.setInput({ task: "", subject: "", priority: "", _id: "" });
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
