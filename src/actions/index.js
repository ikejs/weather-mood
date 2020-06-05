const UPDATE_MOOD = 'UPDATE_MOOD'
const NEW_MOOD = 'NEW_MOOD'

const newMood = (payload) => {
  return {
    type: NEW_MOOD,
    payload
  }
}

const updateMood = (payload) => {
  return {
    type: UPDATE_MOOD,
    payload
  }
}

export { 
  NEW_MOOD, 
  newMood,
  UPDATE_MOOD,
  updateMood
}
