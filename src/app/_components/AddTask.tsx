"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTodo } from "../_contexts/TodoContext";
import {
  NewTaskInput,
  useCreateNewTaskMutation,
  useGetAllTodosQuery,
} from "@/generated";

const AddTask = () => {
  const [createNewTaskMutation] = useCreateNewTaskMutation();
  const { refetch } = useGetAllTodosQuery();
  const { userId } = useTodo();
  const [input, setInput] = React.useState<NewTaskInput>({
    task: "",
    subject: "",
    priority: "",
    userId,
  });
  const [show, setShow] = React.useState<boolean>(false);
  const [category, setCategory] = React.useState<string>("");
  const [categories, setCategories] = React.useState([
    "CS",
    "History",
    "Chinese",
  ]);
  const priority = [
    "urgent and important",
    "important but not urgent",
    "urgent but not important",
    "neither urgent nor important",
  ];

  const handleInput = async () => {
    try {
      const newTask: NewTaskInput = {
        task: input.task,
        subject: input.subject,
        priority: input.priority,
        userId: "6666b52b6db8149d6f472115",
      };
      console.log("newTask", newTask);

      await createNewTaskMutation({
        variables: { input: newTask },
      });
      refetch();
      setInput({ task: "", subject: "", priority: "", userId });
    } catch (err) {
      console.log("err", err);
    }
  };

  const AddCategory = (category: string) => {
    setCategories([...categories, category]);
    console.log(categories);
    setShow(false);
    setCategory("");
  };

  return (
    <div className="flex items-center py-4 gap-[10px] mb-[20px]">
      <Input
        value={input?.task as string}
        placeholder="Add Task..."
        onChange={(e) =>
          setInput((prev) => ({ ...prev, task: e.target.value }))
        }
        className="max-w-sm"
      />
      <Select
        value={input?.subject as string}
        onValueChange={(val) => setInput((prev) => ({ ...prev, subject: val }))}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((item, idx) => (
            <SelectItem key={idx} value={item}>
              {item}
            </SelectItem>
          ))}
          {show ? (
            <div className="flex gap-[5px]">
              <Input
                placeholder="Add Category..."
                onChange={(e) => setCategory(e.target.value)}
              />
              <Button onClick={() => AddCategory(category)}>Add</Button>
            </div>
          ) : (
            <Button onClick={() => setShow(true)}>Add Category</Button>
          )}
        </SelectContent>
      </Select>
      <Select
        value={input?.priority as string}
        onValueChange={(val) =>
          setInput((prev) => ({ ...prev, priority: val }))
        }
      >
        <SelectTrigger className="w-[240px]">
          <SelectValue placeholder="by Priority" />
        </SelectTrigger>
        <SelectContent>
          {priority.map((el, idx) => (
            <SelectItem key={idx} value={el}>
              {el}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button onClick={handleInput}>Add</Button>
    </div>
  );
};

export default AddTask;
