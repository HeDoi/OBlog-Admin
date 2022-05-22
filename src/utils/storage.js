export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}

export const getItem = (key) => {
  const value = localStorage.getItem(key)
  try {
    return JSON.parse(value)
  } catch (e) {
    return value
  }
}

export const removeItem = (key) => {
  localStorage.removeItem(key)
}

export const clear = () => {
  localStorage.clear()
}
