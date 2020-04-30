export const selectTodos = (state) => state.todos

export const selectTodosCompleted = (state) => state.todos.filter(todo => todo.completed)

export const selectTodosIncompleted = (state) => state.todos.filter(todo => !todo.completed)

export const selectVisibleTodos = (state) => {
    
}