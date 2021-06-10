export const getAdvice = () => {
  return fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
}

export const getCatPicture = () => {
  return fetch('https://thatcopy.pw/catapi/rest/')
    .then(response => response.json())
}