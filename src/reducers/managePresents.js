export function managePresents(state = {numberOfPresent: 0}, action){
  switch (action.type) {
    case 'INCREASE':
      return {numberOfPresents: state.numberOfPresents + 1} 
    default:
      return state;
  }
}
