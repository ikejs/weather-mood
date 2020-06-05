import { UPDATE_MOOD } from '../actions'

export default (state = [], action) => {
  switch(action.type) {
    case UPDATE_MOOD: 
      return action.payload
    
    default: 
      return state
  }
}
