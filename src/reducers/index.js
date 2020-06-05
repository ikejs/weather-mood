import { combineReducers } from 'redux'
import moods from './moods-reducer'
import mood from './current-mood-reducer'

export default combineReducers({
  moods,
  mood
})