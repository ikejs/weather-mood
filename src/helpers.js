const MOODS_STATE = "MOODS_STATE"

// Load State
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(MOODS_STATE)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch(err) {
    return undefined
  }
}

// Save State
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(MOODS_STATE, serializedState)
  } catch(err) {
    console.log(`Error saving data:${err}`)
  }
}

// Capitalize first character
export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Convert kelvin to fahrenheit
export const toFahrenheit = (kelvin) => {
  return ((((kelvin - 273.15) * 9) / 5) + 32).toFixed();
}