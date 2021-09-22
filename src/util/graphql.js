import gql from 'graphql-tag';

export const FETCH_TODOS_QUERY = gql`
{
    getTodoList{
    id body createdAt username isCompleted
}
}
`

export const ADD_TODO_MUTATION = gql`
mutation createTodo($body: String!){
    createTodo(body: $body){
      id
      body
      createdAt
      username
      isCompleted
    }
}
`

export const UPDATE_TODO_MUTATION = gql`
mutation updateTodo(
    $id: ID!
    $body: String!
    $createdAt: String!
    $username: String!
    $isCompleted: String!
  ) {
    updateTodo(
      updateTodoInput: {
        id: $id
        body: $body
        createdAt: $createdAt
        username: $username
        isCompleted: $isCompleted
      }
    ) {
      id
      body
      createdAt
      username
      isCompleted
    }
}
`