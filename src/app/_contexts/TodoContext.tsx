"use client";

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { TaskType } from "@/lib/types";
import { todos } from "../data/data";

type Props = {
  children: ReactNode;
};

type TodoContextType = {
  todos: TaskType[];
  setTodos: (todos: TaskType[]) => void;
  userId: string;
};

const TodoContext = createContext({} as TodoContextType);

export function useTodo() {
  return useContext(TodoContext);
}

const TodoProvider = (props: Props) => {
  const router = useRouter();
  const [todos, setTodos] = useState<TaskType[]>([]);
  const [userId, setUserId] = useState<string>("");
  const { children } = props;

  const getAllTasks = async () => {
    setTodos(todos);
  };

  useEffect(() => {
    getAllTasks();
  }, []);
  return (
    <TodoContext.Provider value={{ todos, setTodos, userId }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
