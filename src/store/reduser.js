const initialState = {
    categories: [
        {
            id: 1,
            parent: null,
            title: 'Category 1',
        },
        {
            id: 2,
            parent: 1,
            title: 'Category 1.1'
        },
        {
            id: 3,
            parent: 2,
            title: 'Category 1.1.1',
        },
        {
            id: 4,
            parent: null,
            title: 'Category 2',
        },
        {
            id: 5,
            parent: 4,
            title: 'Category 2.1',
        },
        {
            id: 6,
            parent: 4,
            title: 'Category 2.2',
        }

    ],
    tasks: [
        {id: 1, title: 'drink coffee categoryyy', done: false, category: 1},
        {id: 2, title: 'drink coffee', done: false, category: 2},
        {id: 3, title: 'drink coffee', done: false, category: 2},
        {id: 4, title: 'drink coffeeCategory 1.1.2', done: true, category: 3},
        {id: 5, title: 'drink coffee', done: false, category: 3},
        {id: 6, title: 'drink coffeeCategory 1.1.2', done: false, category: 3},
        {id: 7, title: 'drink coffee', done: false, category: 4},
        {id: 8, title: 'drink coffee', done: false, category: 4},
        {id: 9, title: 'drink coffee', done: false, category: 5},
        {id: 10, title: 'drink coffeeCategory 2.1', done: true, category: 5},
        {id: 11, title: 'drink coffeeCategory 2.2', done: true, category: 6},
        {id: 12, title: 'drink coffee', done: false, category: 6}
    ],
    currentCategory: 1,
    showDone: false
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'UPDATE_ITEMS':
            console.log(action)
            return {
                ...state,
                currentCategory: action.payload
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
        default:
            return state;
    }
};

export default reducer;