export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return (
                {...state,
                    friends: [
                        ...state.friends,
                        action.friend
                    ]
                }
            )
                        
        case 'REMOVE_FRIEND':
            let indexOfRemoval = state.friends.findIndex( friend => friend.id === action.id)
            return (
                {...state,
                    friends: [
                        ...state.friends.slice(0,indexOfRemoval),
                        ...state.friends.slice(indexOfRemoval + 1)
                    ]
                }
            )
                
            default:
                return state;
    }
}
