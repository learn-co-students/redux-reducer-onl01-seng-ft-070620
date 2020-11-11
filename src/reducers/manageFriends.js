export function manageFriends(state = {friends: []}, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return {friends: [...state.friends, action.friend]}
        case "REMOVE_FRIEND":
            let iOfxFriend = state.friends.findIndex(f => f.id === action.id)
            return {friends: [...state.friends.slice(0, iOfxFriend), ...state.friends.slice(iOfxFriend+1)]}
        default: return state
    }
}
