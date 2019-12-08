export const updateItems = (payload) => ({ type: 'UPDATE_ITEMS', payload })

export const addTaskToCurrentList = (payload) =>{
    return  {
        type: 'ADD_TASK_TO_CURRENT_LIST',
        payload: { title: payload, done: false },
    }
}
