import React from "react";
import { TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useUpdateTaskMutation, useGetAllTodosQuery } from "@/generated";

type Props = { taskStatus: string; taskId: string };

const TaskStatus = (props: Props) => {
  const { refetch } = useGetAllTodosQuery();
  const [updateTaskMutation] = useUpdateTaskMutation();
  const handleDone = async (id: string) => {
    try {
      await updateTaskMutation({
        variables: { updateTaskInput: { _id: id, status: "success" } },
      });
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
    </TableCell>
  );
};

export default TaskStatus;
