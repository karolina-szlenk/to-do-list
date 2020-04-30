export const TODOS_ACTION_TYPES = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
}

let nextToDoId = 0;

export const ACTION_ADD_TODO = (inputValue) => {
    return {
        type: TODOS_ACTION_TYPES.ADD_TODO,
        value: inputValue,
        id: nextToDoId++
    }
}

export const ACTION_TOGGLE_TODO = (id) => {
    return {
        type: TODOS_ACTION_TYPES.TOGGLE_TODO,
        id: id
    }
}