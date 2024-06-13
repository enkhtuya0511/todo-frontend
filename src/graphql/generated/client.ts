export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  createNewTask?: Maybe<Task>;
  deleteTask?: Maybe<Task>;
  updateTask?: Maybe<Task>;
};


export type MutationCreateNewTaskArgs = {
  input: NewTaskInput;
};


export type MutationDeleteTaskArgs = {
  taskId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput;
};

export type Query = {
  __typename?: 'Query';
  getAllTodos: Array<Maybe<Task>>;
  getAllUsers: Array<Maybe<User>>;
  getTodo: Task;
};


export type QueryGetTodoArgs = {
  taskId?: InputMaybe<Scalars['String']['input']>;
};

export type NewTaskInput = {
  priority?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  task?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type Task = {
  __typename?: 'task';
  _id: Scalars['String']['output'];
  priority?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  subject: Scalars['String']['output'];
  task: Scalars['String']['output'];
  userId?: Maybe<Scalars['String']['output']>;
};

export type UpdateTaskInput = {
  _id: Scalars['String']['input'];
  priority?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  task?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'user';
  email: Scalars['String']['output'];
  password: Scalars['String']['output'];
  username?: Maybe<Scalars['String']['output']>;
};


