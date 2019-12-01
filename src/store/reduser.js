const initialState = {
    items: {
            categoryies: [
                {
                    clildren : [
                        {
                            clildren : [
                                {
                                    clildren : [

                                    ],
                                    title: 'Category 1'
                                }
                            ],
                            title: 'Category 1'
                        }
                    ],
                    title: 'Category 1',
                    items: [
                        {title: 'drink coffee', done: false},
                        {title: 'drink coffee', done: false},
                        {title: 'drink coffee', done: false},
                        {title: 'drink coffee', done: false},
                        {title: 'drink coffee', done: false},
                    ]
                }
            ],
            category2: [
                {title: 'drink coffee', done: false},
                {title: 'drink coffee', done: false},
                {title: 'drink coffee', done: false},
                {title: 'drink coffee', done: false},
                {title: 'drink coffee', done: false},
            ]
        }
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_ITEM':
            return {
                items:  [...state.items,action.payload]
            };

        default:
            return state;
    }
};

export default reducer;