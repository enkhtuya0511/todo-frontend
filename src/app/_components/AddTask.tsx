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
import { TaskType } from "@/lib/types";
import { InputType } from "@/lib/types";

const AddTask = () => {
  const { todos, setTodos, userId } = useTodo();
  const [show, setShow] = React.useState<boolean>(false);
  const [input, setInput] = React.useState({} as InputType);
  const [categories, setCategories] = React.useState([
    "CS",
    "History",
    "Chinese",
  ]);
  const Category = ["CS", "History", "Chinese"];
  const [category, setCategory] = React.useState<string>("");

  const handleInput = async () => {
    try {
      const newTask: InputType = {
        task: input.task,
        subject: input.subject,
        priority: input.priority,
        userId,
      };

      // const response = await fetch(`http://localhost:7001/todo/create/api`, {
      //   method: "POST",
      //   mode: "no-cors",
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      //   body: JSON.stringify(newTask),
      // });

      // console.log("res", response, userId);
      // if (response.status == 0) {
      setTodos([...todos, { ...newTask, status: "pending" } as TaskType]);
      setInput({ task: "", subject: "", priority: "", userId });
      console.log("hhhe");
      // }
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
        placeholder="Add Task..."
        onChange={(e) =>
          setInput((prev) => ({ ...prev, task: e.target.value }))
        }
        className="max-w-sm"
      />
      <Select
        onValueChange={(val) => setInput((prev) => ({ ...prev, subject: val }))}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((item, id) => (
            <div key={id}>
              <SelectItem value={item}>{item}</SelectItem>
            </div>
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
        onValueChange={(val) =>
          setInput((prev) => ({ ...prev, priority: val }))
        }
      >
        <SelectTrigger className="w-[240px]">
          <SelectValue placeholder="by Priority" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="urgent and important">
            urgent and important
          </SelectItem>
          <SelectItem value="important but not urgent">
            important but not urgent
          </SelectItem>
          <SelectItem value="urgent but not important">
            urgent but not important
          </SelectItem>
          <SelectItem value="neither urgent nor important">
            neither urgent nor important
          </SelectItem>
        </SelectContent>
      </Select>
      <Button onClick={handleInput}>Add</Button>
    </div>
  );
};

export default AddTask;
