// @ts-nocheck
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
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

export type GetTodoQueryVariables = Exact<{
  taskId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetTodoQuery = { __typename?: 'Query', getTodo: { __typename?: 'task', _id: string, priority?: string | null, status?: string | null, subject: string, task: string, userId?: string | null } };

export type GetAllTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTodosQuery = { __typename?: 'Query', getAllTodos: Array<{ __typename?: 'task', _id: string, priority?: string | null, status?: string | null, subject: string, task: string, userId?: string | null } | null> };

export type UpdateTaskMutationVariables = Exact<{
  updateTaskInput: UpdateTaskInput;
}>;


export type UpdateTaskMutation = { __typename?: 'Mutation', updateTask?: { __typename?: 'task', _id: string, priority?: string | null, status?: string | null, task: string, subject: string } | null };

export type DeleteTaskMutationVariables = Exact<{
  deleteTaskTaskId2?: InputMaybe<Scalars['String']['input']>;
}>;


export type DeleteTaskMutation = { __typename?: 'Mutation', deleteTask?: { __typename?: 'task', _id: string, priority?: string | null, status?: string | null, subject: string, task: string, userId?: string | null } | null };

export type CreateNewTaskMutationVariables = Exact<{
  input: NewTaskInput;
}>;


export type CreateNewTaskMutation = { __typename?: 'Mutation', createNewTask?: { __typename?: 'task', priority?: string | null, status?: string | null, subject: string, task: string, userId?: string | null } | null };


export const GetTodoDocument = gql`
    query GetTodo($taskId: String) {
  getTodo(taskId: $taskId) {
    _id
    priority
    status
    subject
    task
    userId
  }
}
    `;
export type GetTodoProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetTodoQuery, GetTodoQueryVariables>
    } & TChildProps;
export function withGetTodo<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetTodoQuery,
  GetTodoQueryVariables,
  GetTodoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetTodoQuery, GetTodoQueryVariables, GetTodoProps<TChildProps, TDataName>>(GetTodoDocument, {
      alias: 'getTodo',
      ...operationOptions
    });
};

/**
 * __useGetTodoQuery__
 *
 * To run a query within a React component, call `useGetTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodoQuery({
 *   variables: {
 *      taskId: // value for 'taskId'
 *   },
 * });
 */
export function useGetTodoQuery(baseOptions?: Apollo.QueryHookOptions<GetTodoQuery, GetTodoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTodoQuery, GetTodoQueryVariables>(GetTodoDocument, options);
      }
export function useGetTodoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodoQuery, GetTodoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTodoQuery, GetTodoQueryVariables>(GetTodoDocument, options);
        }
export function useGetTodoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTodoQuery, GetTodoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTodoQuery, GetTodoQueryVariables>(GetTodoDocument, options);
        }
export type GetTodoQueryHookResult = ReturnType<typeof useGetTodoQuery>;
export type GetTodoLazyQueryHookResult = ReturnType<typeof useGetTodoLazyQuery>;
export type GetTodoSuspenseQueryHookResult = ReturnType<typeof useGetTodoSuspenseQuery>;
export type GetTodoQueryResult = Apollo.QueryResult<GetTodoQuery, GetTodoQueryVariables>;
export const GetAllTodosDocument = gql`
    query GetAllTodos {
  getAllTodos {
    _id
    priority
    status
    subject
    task
    userId
  }
}
    `;
export type GetAllTodosProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllTodosQuery, GetAllTodosQueryVariables>
    } & TChildProps;
export function withGetAllTodos<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllTodosQuery,
  GetAllTodosQueryVariables,
  GetAllTodosProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllTodosQuery, GetAllTodosQueryVariables, GetAllTodosProps<TChildProps, TDataName>>(GetAllTodosDocument, {
      alias: 'getAllTodos',
      ...operationOptions
    });
};

/**
 * __useGetAllTodosQuery__
 *
 * To run a query within a React component, call `useGetAllTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTodosQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTodosQuery, GetAllTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTodosQuery, GetAllTodosQueryVariables>(GetAllTodosDocument, options);
      }
export function useGetAllTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTodosQuery, GetAllTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTodosQuery, GetAllTodosQueryVariables>(GetAllTodosDocument, options);
        }
export function useGetAllTodosSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllTodosQuery, GetAllTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllTodosQuery, GetAllTodosQueryVariables>(GetAllTodosDocument, options);
        }
export type GetAllTodosQueryHookResult = ReturnType<typeof useGetAllTodosQuery>;
export type GetAllTodosLazyQueryHookResult = ReturnType<typeof useGetAllTodosLazyQuery>;
export type GetAllTodosSuspenseQueryHookResult = ReturnType<typeof useGetAllTodosSuspenseQuery>;
export type GetAllTodosQueryResult = Apollo.QueryResult<GetAllTodosQuery, GetAllTodosQueryVariables>;
export const UpdateTaskDocument = gql`
    mutation UpdateTask($updateTaskInput: updateTaskInput!) {
  updateTask(input: $updateTaskInput) {
    _id
    priority
    status
    task
    subject
  }
}
    `;
export type UpdateTaskMutationFn = Apollo.MutationFunction<UpdateTaskMutation, UpdateTaskMutationVariables>;
export type UpdateTaskProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateTaskMutation, UpdateTaskMutationVariables>
    } & TChildProps;
export function withUpdateTask<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateTaskMutation,
  UpdateTaskMutationVariables,
  UpdateTaskProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateTaskMutation, UpdateTaskMutationVariables, UpdateTaskProps<TChildProps, TDataName>>(UpdateTaskDocument, {
      alias: 'updateTask',
      ...operationOptions
    });
};

/**
 * __useUpdateTaskMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutation, { data, loading, error }] = useUpdateTaskMutation({
 *   variables: {
 *      updateTaskInput: // value for 'updateTaskInput'
 *   },
 * });
 */
export function useUpdateTaskMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTaskMutation, UpdateTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(UpdateTaskDocument, options);
      }
export type UpdateTaskMutationHookResult = ReturnType<typeof useUpdateTaskMutation>;
export type UpdateTaskMutationResult = Apollo.MutationResult<UpdateTaskMutation>;
export type UpdateTaskMutationOptions = Apollo.BaseMutationOptions<UpdateTaskMutation, UpdateTaskMutationVariables>;
export const DeleteTaskDocument = gql`
    mutation DeleteTask($deleteTaskTaskId2: String) {
  deleteTask(taskId: $deleteTaskTaskId2) {
    _id
    priority
    status
    subject
    task
    userId
  }
}
    `;
export type DeleteTaskMutationFn = Apollo.MutationFunction<DeleteTaskMutation, DeleteTaskMutationVariables>;
export type DeleteTaskProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteTaskMutation, DeleteTaskMutationVariables>
    } & TChildProps;
export function withDeleteTask<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteTaskMutation,
  DeleteTaskMutationVariables,
  DeleteTaskProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteTaskMutation, DeleteTaskMutationVariables, DeleteTaskProps<TChildProps, TDataName>>(DeleteTaskDocument, {
      alias: 'deleteTask',
      ...operationOptions
    });
};

/**
 * __useDeleteTaskMutation__
 *
 * To run a mutation, you first call `useDeleteTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTaskMutation, { data, loading, error }] = useDeleteTaskMutation({
 *   variables: {
 *      deleteTaskTaskId2: // value for 'deleteTaskTaskId2'
 *   },
 * });
 */
export function useDeleteTaskMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTaskMutation, DeleteTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTaskMutation, DeleteTaskMutationVariables>(DeleteTaskDocument, options);
      }
export type DeleteTaskMutationHookResult = ReturnType<typeof useDeleteTaskMutation>;
export type DeleteTaskMutationResult = Apollo.MutationResult<DeleteTaskMutation>;
export type DeleteTaskMutationOptions = Apollo.BaseMutationOptions<DeleteTaskMutation, DeleteTaskMutationVariables>;
export const CreateNewTaskDocument = gql`
    mutation CreateNewTask($input: newTaskInput!) {
  createNewTask(input: $input) {
    priority
    status
    subject
    task
    userId
  }
}
    `;
export type CreateNewTaskMutationFn = Apollo.MutationFunction<CreateNewTaskMutation, CreateNewTaskMutationVariables>;
export type CreateNewTaskProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateNewTaskMutation, CreateNewTaskMutationVariables>
    } & TChildProps;
export function withCreateNewTask<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateNewTaskMutation,
  CreateNewTaskMutationVariables,
  CreateNewTaskProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateNewTaskMutation, CreateNewTaskMutationVariables, CreateNewTaskProps<TChildProps, TDataName>>(CreateNewTaskDocument, {
      alias: 'createNewTask',
      ...operationOptions
    });
};

/**
 * __useCreateNewTaskMutation__
 *
 * To run a mutation, you first call `useCreateNewTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewTaskMutation, { data, loading, error }] = useCreateNewTaskMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateNewTaskMutation(baseOptions?: Apollo.MutationHookOptions<CreateNewTaskMutation, CreateNewTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNewTaskMutation, CreateNewTaskMutationVariables>(CreateNewTaskDocument, options);
      }
export type CreateNewTaskMutationHookResult = ReturnType<typeof useCreateNewTaskMutation>;
export type CreateNewTaskMutationResult = Apollo.MutationResult<CreateNewTaskMutation>;
export type CreateNewTaskMutationOptions = Apollo.BaseMutationOptions<CreateNewTaskMutation, CreateNewTaskMutationVariables>;