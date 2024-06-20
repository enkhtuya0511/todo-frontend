import React from "react";
import { TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useUpdateTaskMutation, useGetAllTodosQuery } from "@/generated";
import { useTodo } from "../_contexts/TodoContext";
import toast, { Toaster } from "react-hot-toast";

type Props = { taskStatus: string; taskId: string };

const TaskStatus = (props: Props) => {
  const notify = () =>
    toast("Good Job!", {
      icon: "👏",
    });
  const { userId } = useTodo();
  const { refetch } = useGetAllTodosQuery({ variables: { userId: userId } });
  const [updateTaskMutation] = useUpdateTaskMutation();
  const handleDone = async (id: string) => {
    try {
      await updateTaskMutation({
        variables: { updateTaskInput: { _id: id, status: "success" } },
      });
      notify();
      refetch();
    } catch (error) {
      console.error("Error during changing status: ", error);
    }
  };
  return (
    <TableCell>
      {props.taskStatus === "success" ? (
        <Button disabled>Done</Button>
      ) : (
        <Button onClick={() => handleDone(props.taskId)}>Mark as Done</Button>
      )}
      <Toaster position="bottom-right" reverseOrder={false} />
    </TableCell>
  );
};

export default TaskStatus;
