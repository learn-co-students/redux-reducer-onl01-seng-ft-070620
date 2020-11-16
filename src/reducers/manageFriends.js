export function manageFriends(state, action){
    switch(action.type)
    {
        case 'ADD_FRIEND':
            return {friends: state.friends.concat([action.friend])}
        case 'REMOVE_FRIEND':
            let friendID = action.id
            let friends = []
            for(let i = 0; i < state.friends.length; i++)
            {
                if(state.friends[i].id != friendID)
                {
                    friends.push(state.friends[i])
                }
            }
            return {friends: friends}
        default:
            return state
    }
}
