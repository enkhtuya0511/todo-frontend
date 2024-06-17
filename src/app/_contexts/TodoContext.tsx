"use client";

import React, { ReactNode, createContext, useContext, useState } from "react";
import { Task } from "@/generated";

type Props = {
  children: ReactNode;
};

type TodoContextType = {
  todos: Task[];
  setTodos: (todos: Task[]) => void;
  userId: string;
};

const TodoContext = createContext({} as TodoContextType);

export function useTodo() {
  return useContext(TodoContext);
}

const TodoProvider = (props: Props) => {
  const [todos, setTodos] = useState<Task[]>([]);
  const [userId, setUserId] = useState<string>("");
  const { children } = props;

  return (
    <TodoContext.Provider value={{ todos, setTodos, userId }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
