const initialState = {
    categories: [
        {
            id: '1',
            parent: null,
            title: 'Category 1',
        },
        {
            id: '2',
            parent: '1',
            title: 'Category 1.1'
        },
        {
            id: '3',
            parent: '2',
            title: 'Category 1.1.1',
        },
        {
            id: '4',
            parent: null,
            title: 'Category 2',
        },
        {
            id:'5',
            parent: '4',
            title: 'Category 2.1',
        },
        {
            id: '6',
            parent: '4',
            title: 'Category 2.2',
        }

    ],
    tasks: {
        1: [
            {title: 'drink coffee categoryyy', done: false},
            {title: 'drink coffee', done: true},
            {title: 'drink coffeeCategory 1', done: false},
            {title: 'drink coffee', done: false},
            {title: 'drink coffeeCategory 1', done: false}
        ],
        2: [
            {title: 'drink coffee', done: false},
            {title: 'drink coffee', done: false},
            {title: 'drink coffeeCategory 1.1', done: false},
            {title: 'drink coffee', done: false},
            {title: 'drink coffeeCategory 1.1', done: false}
        ],
        3: [
            {title: 'drink coffeeCategory 1.1.2', done: true},
            {title: 'drink coffee', done: false},
            {title: 'drink coffeeCategory 1.1.2', done: false},
            {title: 'drink coffee', done: true},
            {title: 'drink coffee', done: false}
        ],
        4: [
            {title: 'drink coffee', done: false},
            {title: 'drink coffeeCategory 2', done: true},
            {title: 'drink coffee', done: false},
            {title: 'drink coffeeCategory 2', done: false},
            {title: 'drink coffee', done: false}
        ],
        5: [
            {title: 'drink coffee', done: false},
            {title: 'drink coffee', done: false},
            {title: 'drink coffeeCategory 2.1', done: false},
            {title: 'drink coffee', done: false},
            {title: 'drink coffeeCategory 2.1', done: true}
        ],
        6: [
            {title: 'drink coffeeCategory 2.2', done: true},
            {title: 'drink coffee', done: false},
            {title: 'drink coffeeCategory 2.2', done: false},
            {title: 'drink coffee', done: false},
            {title: 'drink coffee', done: false}
        ]

    },
    currentCategory: ''
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_TASK_TO_CURRENT_LIST':
            let list = state.tasks[state.currentCategory]
                .push(action.payload)
            return {
                ...state,
                tasks:  [...state.tasks, list]
            };
        case 'UPDATE_ITEMS':
            console.log(action)
            return {
                ...state,
                currentCategory: action.payload
            };
        default:
            return state;
    }
};

export default reducer;