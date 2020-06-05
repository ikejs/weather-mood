const NEW_MOOD = 'NEW_MOOD'

const newMood = (payload) => {
  return {
    type: NEW_MOOD,
    payload
  }
}

export { 
  NEW_MOOD, 
  newMood
}
