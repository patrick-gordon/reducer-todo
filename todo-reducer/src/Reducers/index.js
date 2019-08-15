
// always want state in a object
export const initialState = {
    todoArray: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }
    ]
}

export function reducer(state, action) {
    console.log('action', action)
    switch(action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todoArray: [...state.todoArray, {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }]
            };
    default:
        return state;
    }
}