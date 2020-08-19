const initialState = {
    todos: []
}

export default function todo(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_DO':
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
        default:
            return state;
    }
} 