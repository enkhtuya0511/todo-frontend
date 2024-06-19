"use client";

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";

type Props = {
  children: ReactNode;
};

type TodoContextType = {
  userId: string;
  setUserId: (userId: string) => void;
};

const TodoContext = createContext({} as TodoContextType);

export function useTodo() {
  return useContext(TodoContext);
}

const TodoProvider = (props: Props) => {
  const router = useRouter();
  const [userId, setUserId] = useState<string>("");
  const { children } = props;

  useEffect(() => {
    const getUserId = () => {
      if (window) {
        const ID = localStorage.getItem("ui");
        console.log("ID", ID);
        if (ID) {
          setUserId(ID);
          console.log("userId", userId);
        } else {
          router.push("/login");
        }
      }
    };
    getUserId();
  }, []);

  return (
    <TodoContext.Provider value={{ userId, setUserId }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
