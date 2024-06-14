// import React from "react";
// import { RiDeleteBin5Line } from "react-icons/ri";
// import { useDeleteTaskMutation, DeleteTaskDocument } from "@/generated";

// type Props = {
//   taskId: string | undefined;
// };

// export const DeleteTask = (props: Props) => {
//   console.log("deleteTask props", props?.taskId);
//     const [deleteTaskMutation, { data, loading, error }] =
//       useDeleteTaskMutation(DeleteTaskDocument);
//     if (loading) console.log("after delete");
//     else console.log(data, "delete");
//   };
//   return (
//     <div onClick={() => deleteTaskMutation(variable)}>
//       <RiDeleteBin5Line />
//     </div>
//   );
// };
