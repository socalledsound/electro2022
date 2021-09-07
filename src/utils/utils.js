export const getRandomColor = () => `#${Math.floor(Math.random() * 2 ** 24).toString(16).padStart(6, "0")}`
export const randomizeArray = (arr)  => arr.slice().sort((a,b) => (0.5 - Math.random()))



const getElapsedTime = (timestamp) => {
    const timeMade = new Date(timestamp)
    const now = new Date()
    
    return now - timeMade
}

const convertElapsedTime = (millisec) => {
    let seconds = (millisec / 1000).toFixed(0)
    let minutes = Math.floor(seconds / 60)
    let hours = ''
    if(minutes > 59){
        hours = Math.floor(minutes/60)
        minutes = minutes - (hours * 60)
    }
    // seconds = Math.floor(seconds % 60);
    // seconds = (seconds >= 10) ? seconds : `0${seconds}`
    if(minutes < 1){
        return 'less than a minute ago'
    } else if(hours !== ''){
        return `${hours}hours and ${minutes}minutes ago`
    } else {
        return `${minutes}minutes ago`
    }
}


export const createTimeElapsed = (timestamp) => {
    const elapsedTime = getElapsedTime(timestamp)
    const elapsedTimestamp = convertElapsedTime(elapsedTime)
    return elapsedTimestamp
}
