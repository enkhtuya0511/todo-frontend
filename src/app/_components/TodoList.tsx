"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Task from "./Task";

const TodoList = () => {
  return (
    <Table>
      <TableCaption>A list of your recent tasks.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Task</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Category</TableHead>
          <TableHead />
          <TableHead />
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <Task />
      </TableBody>
    </Table>
  );
};

export default TodoList;

//<TableHead className="text-left">Actions</TableHead>
