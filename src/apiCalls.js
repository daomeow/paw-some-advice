export const getData = () => {
  return Promise.all([
    fetch('https://api.adviceslip.com/advice'), 
    fetch('https://thatcopy.pw/catapi/rest/')
  ]).then((responses) => {
    return Promise.all(responses.map((response) => {
        return response.json();
    }))
  }) 
}