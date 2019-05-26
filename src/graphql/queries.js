// eslint-disable
// this is an auto generated file. This will be overwritten

 export const getTodo = `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    name
    description
  }
}
`;
 export const listTodos = `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
    }
    nextToken
  }
}
`;

export const Racerdata = `query listRacerNj7uthp6pzfadg3eixfrzy5utmRaamenvs {
  listRacerNj7uthp6pzfadg3eixfrzy5utmRaamenvs{
    items{
      id
      cadence
      temperature
      timestamp
      speed
      enhanced_speed
    }
  }
}
`;

export const asset = `query listAssetTableC60dd8as {
  listAssetTableC60dd8as{
    items{
      id
      ts
    }
  }
}
`;





