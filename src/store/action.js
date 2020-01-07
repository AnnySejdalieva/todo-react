import {debounce} from "lodash";

export const updateItems = (payload) => ({ type: 'UPDATE_ITEMS', payload })

export const addTask = (payload) =>({ type: 'ADD_TASK', payload: payload })

export const addCategory = (payload) =>({ type: 'ADD_CATEGORY', payload: payload })

export const showOnlyDone = () => ({ type: 'SHOW_ONLY_DONE' })

export const changeTask = (payload) => ({ type: 'CHANGE_TASK', payload: payload })

export const changeCategory = (payload) => ({ type: 'CHANGE_CATEGORY', payload: payload })

export const deleteCategory = (payload) => ({ type: 'DELETE_CATEGORY', payload: payload })

export const changeModal = (payload) => ({type: 'CHANGE_MODAL', payload: payload})

export const changeSearch = (payload) => ({type: 'CHANGE_SEARCH', payload: payload})

export const startLoading = () => ({type: 'START_LOADING'})

export const finishLoading = () => ({type: 'FINISH_LOADING'})

const delayedAction = (timeout, action, payload) => (dispatch) => debounce(()=>{
    dispatch(action(payload))
}, timeout)

export const debounceChangeSearch = (payload) => (dispatch) => () => {
    dispatch(startLoading())
    delayedAction(1000, changeSearch, payload)(dispatch)()
}
