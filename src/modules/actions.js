export const TODOS_ACTION_TYPES = {
    ADD_TODO: 'ADD_TODO',
}

let nextToDoId = 0;

export const ACTION_ADD_TODO = (inputValue) => {
    return {
        type: TODOS_ACTION_TYPES.ADD_TODO,
        value: inputValue,
        id: nextToDoId++
    }
}