"use client";

import React, { useEffect, useState } from "react";
import { UpdateTaskInput, useGetAllTodosQuery } from "@/generated";
import { TableCell, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DeleteTask from "./DeleteTask";
import EditTask from "./EditTask";
import UpdateTask from "./UpdateTask";
import TaskStatus from "./TaskStatus";
import { useTodo } from "../_contexts/TodoContext";

const Todo = () => {
  const { userId } = useTodo();
  const { data } = useGetAllTodosQuery({
    variables: { userId: userId },
  });
  const [editId, setEditId] = useState<string>("");
  const todo = data?.getAllTodos?.find((todo) => todo?._id === editId);
  const [input, setInput] = useState<UpdateTaskInput>({
    task: "",
    subject: "",
    priority: "",
    _id: "",
  });

  useEffect(() => {
    if (todo) {
      setInput({
        task: todo.task || "",
        subject: todo.subject || "",
        priority: todo.priority || "",
        _id: todo._id || "",
      });
    }
  }, [todo]);
  return (
    <>
      {data?.getAllTodos?.map((item, id) => (
        <TableRow key={id} className={`${item?.status === "success" && "line-through"}`}>
          {editId === item?._id ? (
            <>
              <TableCell className={`font-medium`}>
                <Input
                  defaultValue={item?.task}
                  onChange={(e) =>
                    setInput((prev) => ({
                      ...prev,
                      task: e.target.value,
                    }))
                  }
                />
              </TableCell>
              <TableCell>{item?.status}</TableCell>
              <TableCell>
                <Select
                  defaultValue={item?.subject}
                  onValueChange={(val) =>
                    setInput((prev) => ({
                      ...prev,
                      subject: val,
                    }))
                  }
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={item?.subject} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CS">CS</SelectItem>
                    <SelectItem value="Chinese">Chinese</SelectItem>
                    <SelectItem value="History">History</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <UpdateTask input={input} setInput={setInput} taskId={item?._id as string} setEditId={setEditId} />
            </>
          ) : (
            <>
              <TableCell className={`font-medium`}>{item?.task}</TableCell>
              <TableCell>{item?.status}</TableCell>
              <TableCell>{item?.subject}</TableCell>
              <EditTask taskId={item?._id as string} setEditId={setEditId} />
            </>
          )}
          <DeleteTask taskId={item?._id as string} />
          <TaskStatus taskId={item?._id as string} taskStatus={item?.status as string} />
        </TableRow>
      ))}
    </>
  );
};

export default Todo;
