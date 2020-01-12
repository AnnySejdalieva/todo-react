const initialState = {
    categories: [
        { id: 1, parent: 0, title: 'Category 1' },
        { id: 2, parent: 1, title: 'Category 1 1' },
        { id: 3, parent: 2, title: 'Category 1 1 1' },
        { id: 4, parent: 0, title: 'Category 2' },
        { id: 5, parent: 4, title: 'Category 2 1' },
        { id: 6, parent: 4, title: 'Category 2 2' }
    ],
    tasks: [
        {id: 1, title: 'drink coffee categoryyy', done: false, category: 1},
        {id: 2, title: 'drink coffee', done: false, category: 2},
        {id: 3, title: 'drink coffee', done: false, category: 2},
        {id: 4, title: 'drink coffe', done: true, category: 3},
        {id: 5, title: 'drink coffee', done: false, category: 3},
        {id: 6, title: 'drin', done: false, category: 3},
        {id: 7, title: 'drink coffee', done: false, category: 4},
        {id: 8, title: 'drink coffee', done: false, category: 4},
        {id: 9, title: 'drink coffee', done: false, category: 5},
        {id: 10, title: 'dri', done: true, category: 5},
        {id: 11, title: 'drink ', done: true, category: 6},
        {id: 12, title: 'drink coffee', done: false, category: 6}
    ],
    currentCategory: 1,
    showDone: false,
    modal: {},
    search: '',
    loading: false
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'UPDATE_ITEMS':
            return {
                ...state,
                currentCategory: action.payload
            };
        case 'CHANGE_SEARCH':
            return {
                ...state,
                search: action.payload,
            };
        case 'CHANGE_MODAL':
            return {
                ...state,
                modal: action.payload
            };
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case 'ADD_CATEGORY':
            return {
                ...state,
                categories: [...state.categories, action.payload]
            };
        case 'SHOW_ONLY_DONE':
            return {
                ...state,
                showDone: !state.showDone
            };
        case 'CHANGE_TASK':
            return {
                ...state,
                tasks: [...action.payload]
            };
        case 'START_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'FINISH_LOADING':
            return {
                ...state,
                loading: false
            }
        case 'CHANGE_CATEGORY':
            return {
                ...state,
                categories: [...action.payload]
            };
        case 'DELETE_CATEGORY':
            return {
                ...state,
                tasks: state.tasks.filter((el)=> el.category !== action.payload),
                categories: state.categories.filter((el) => el.id !== action.payload && el.parent !== action.payload)
            };
        default:
            return state;
    }
};

export default reducer;