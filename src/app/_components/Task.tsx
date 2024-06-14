"use client";

import React, { useState } from "react";
import { useTodo } from "../_contexts/TodoContext";
import { TaskType } from "@/lib/types";
import { InputType } from "@/lib/types";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MdOutlineEdit } from "react-icons/md";
import { FiSave } from "react-icons/fi";
import { useGetAllTodosQuery } from "@/generated";
import { RiDeleteBin5Line } from "react-icons/ri";

const Task = () => {
  const { data, loading, error } = useGetAllTodosQuery();
  const { todos, setTodos, userId } = useTodo();
  const [editId, setEditId] = useState<string | undefined>("");
  const [input, setInput] = useState<InputType>({
    task: "",
    subject: "",
    priority: "",
    userId,
  });

  const handleDone = async (id: string | undefined) => {
    const statusChange: TaskType[] = todos.map((item) =>
      item._id === id ? { ...item, status: "success" } : item
    );
    setTodos(statusChange);
  };

  // const handleEdit = async (id: string | undefined) => {
  //   try {
  //     const updatedTask: TaskType[] = todos.map((item) =>
  //       item._id === editId
  //         ? { ...item, task: input.task, subject: input.subject }
  //         : item
  //     );
  //     setTodos(updatedTask);
  //     setEditId("");
  //     setInput({ task: "", subject: "", priority: "", userId });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      {!loading ? (
        <>
          {data?.getAllTodos.map((item, id) => (
            <TableRow
              key={id}
              className={`${item?.status === "success" && "line-through"}`}
            >
              {editId === item?._id ? (
                <>
                  <TableCell className={`font-medium`}>
                    <Input
                      value={input.task}
                      onChange={(e) =>
                        setInput((prev) => ({ ...prev, task: e.target.value }))
                      }
                    />
                  </TableCell>
                  <TableCell>{item?.status}</TableCell>
                  <TableCell>
                    <Select
                      onValueChange={(val) =>
                        setInput((prev) => ({ ...prev, subject: val }))
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
                  <TableCell>
                    <div>
                      {/* <div onClick={() => handleEdit(item?._id)}> */}
                      <FiSave />
                    </div>
                  </TableCell>
                </>
              ) : (
                <>
                  {/* <TableCell className={`font-medium`}>
                {item.priority === "important but not urgent" && (
                  <TbClockHour4Filled />
                )}
              </TableCell> */}
                  <TableCell className={`font-medium`}>{item?.task}</TableCell>
                  <TableCell>{item?.status}</TableCell>
                  <TableCell>{item?.subject}</TableCell>
                  <TableCell>
                    <div
                    // onClick={() => {
                    //   console.log(item?._id, "item._id");
                    //   setEditId(item?._id);
                    //   setInput({
                    //     task: item?.task,
                    //     subject: item?.subject,
                    //     priority: "",
                    //     userId,
                    //   });
                    // }}
                    >
                      <MdOutlineEdit />
                    </div>
                  </TableCell>
                </>
              )}
              <TableCell>
                {/* <div onClick={() => handleDelete(item?._id)}> */}
                <div onClick={() => console.log("aaa", item?._id)}>
                  <RiDeleteBin5Line />
                </div>
              </TableCell>
              <TableCell>
                {item?.status === "success" ? (
                  <Button disabled>Done</Button>
                ) : (
                  <Button onClick={() => handleDone(item?._id)}>
                    Mark as Done
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </>
      ) : (
        <p>loading</p>
      )}
    </>
  );
};

export default Task;
