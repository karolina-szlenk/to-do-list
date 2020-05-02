import * as actions from '../modules/actions'
import { TODOS_ACTION_TYPES } from '../modules/actions'

describe('todos actions', () => {
    it( 'ACTION_ADD_TODO should create ADD_TODO action', () => {
        expect(actions.ACTION_ADD_TODO('Buy milk')).toEqual({
            type: TODOS_ACTION_TYPES.ADD_TODO,
            value: 'Buy milk',
            id: 0,
        })
    })
    it( 'ACTION_TOGGLE_TODO should create TOGGLE_TODO action', () => {
        expect(actions.ACTION_TOGGLE_TODO(1)).toEqual({
            type: TODOS_ACTION_TYPES.TOGGLE_TODO,
            id: 1,
        })
    })
    it( 'ACTION_REMOVE_TODO should create REMOVE_TODO action', () => {
        expect(actions.ACTION_REMOVE_TODO(1)).toEqual({
            type: TODOS_ACTION_TYPES.REMOVE_TODO,
            id: 1,
        })
    })
    it( 'ACTION_SET_VISIBILITY_FILTER should create SET_VISIBILITY_FILTER action', () => {
        expect(actions.ACTION_SET_VISIBILITY_FILTER("activeFilter")).toEqual({
            type: TODOS_ACTION_TYPES.SET_VISIBILITY_FILTER,
            filter: "activeFilter",
        })
    })
    it( 'ACTION_SEARCH_TODO should create SEARCH_TODO', () => {
        expect(actions.ACTION_SEARCH_TODO("Buy")).toEqual({
            type: TODOS_ACTION_TYPES.SEARCH_TODO,
            value: "Buy",
        })
    })
})