export const TODOS_ACTION_TYPES = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    REMOVE_TODO: 'REMOVE_TODO',
    SHOW_ALL: 'SHOW_ALL',
    SHOW_TODO: 'SHOW_TODO',
    SHOW_DONE: 'SHOW_DONE',
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

export const ACTION_REMOVE_TODO = (id) => {
    return {
        type: TODOS_ACTION_TYPES.REMOVE_TODO,
        id: id
    }
}

export const ACTION_SHOW_ALL = () => {
    return {
        type: TODOS_ACTION_TYPES.SHOW_ALL
    }
}

export const ACTION_SHOW_TODO = () => {
    return {
        type: TODOS_ACTION_TYPES.SHOW_TODO
    }
}

export const ACTION_SHOW_DONE = () => {
    return {
        type: TODOS_ACTION_TYPES.SHOW_DONE
    }
}

