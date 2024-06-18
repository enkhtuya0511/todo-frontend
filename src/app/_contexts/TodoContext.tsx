"use client";

import React, { ReactNode, createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  children: ReactNode;
};

type TodoContextType = {
  userId: string;
  // token: string;
};

const TodoContext = createContext({} as TodoContextType);

export function useTodo() {
  return useContext(TodoContext);
}

const TodoProvider = (props: Props) => {
  const router = useRouter();
  const [userId, setUserId] = useState<string>("");
  // const [token, setToken] = useState<string>("");
  const { children } = props;

  const getToken = async () => {
    if (window) {
      const localToken = localStorage.getItem("ui");
      if (localToken) {
        // setToken(localToken);
        try {
          // const id = res.data?.decoded?.userId;
          // setUserId(id);
        } catch (err) {
          console.log("error", err);
        }
      } else {
        router.push("/login");
      }
    }
  };

  return (
    <TodoContext.Provider value={{ userId }}>{children}</TodoContext.Provider>
  );
};

export default TodoProvider;
