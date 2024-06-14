export type TaskType = {
  _id: string;
  subject: string;
  status: "pending" | "processing" | "success" | "failed";
  task: string;
  priority: string;
  userId: string;
};

export interface InputType {
  task: string;
  subject: string;
  priority: string;
  userId: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface SignUpInput {
  email: string;
  password: string;
  username: string;
}
