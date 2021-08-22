export const getRandomColor = () => `#${Math.floor(Math.random() * 2 ** 24).toString(16).padStart(6, "0")}`
export const randomizeArray = (arr)  => arr.slice().sort((a,b) => (0.5 - Math.random()))
    