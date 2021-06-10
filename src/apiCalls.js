export const getAdvice = () => {
  return fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
}