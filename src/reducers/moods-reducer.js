import { NEW_MOOD } from '../actions'

export default (state = [], action) => {
  switch(action.type) {
    case NEW_MOOD: 
      return [...state, action.payload].reverse()

    // more mood actions here
    
    default: 
      return state
  }
}
