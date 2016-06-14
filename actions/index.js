let nextTodoId = 0; //TODOのid管理するための変数

//TODOを追加する
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  };
}

//TODOを完了する
export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
}

//TODOをフィルタリングする
export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
}
