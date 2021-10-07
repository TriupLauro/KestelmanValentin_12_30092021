import axios from "axios";


/**
 * To be used with propTypes. It returns a propType error if the value checked is not a number
 * or is not between 0 and 1 included. The prop will not be required.
 * @returns {Error|null} Either nothing, or the type mismatch error
 */
export const numberBetweenZeroAndOne = (props, propName, componentName) => {
    if (props[propName]) {
        let value = props[propName]
        if (typeof value !== 'number')  return new Error(`${propName} in ${componentName} is not a number`)
        if (value < 0 || value > 1) return new Error(`${propName} in ${componentName} should have a value between 0 and 1 included`)
    } else {
        return null
    }
}

/**
 * Gets the main data of the user, which id is specified, from the API. The API must be running.
 * @param id {number} The unique id of the user from who we get the data (Can only be either 12 or 18)
 * @returns {Promise}
 */
const getMainUserData = id => {
    return axios.get(`http://localhost:8000/user/${id}/`)
}

/**
 * Gets the daily activity data of the user, which id is specified, from the API. The API must be running.
 * @param id {number} The unique id of the user from who we get the data (Can only be either 12 or 18)
 * @returns {Promise}
 */
const getUserActivity = id => {
    return axios.get(`http://localhost:8000/user/${id}/activity`)
}

/**
 * Gets the daily average session length data of the user, which id is specified, from the API. The API must be running.
 * @param id {number} The unique id of the user from who we get the data (Can only be either 12 or 18)
 * @returns {Promise}
 */
const getUserAverageSessions = id => {
    return axios.get(`http://localhost:8000/user/${id}/average-sessions`)
}

/**
 * Gets the type of physical activity data of the user, which id is specified, from the API. The API must be running.
 * The data is used in the RadarChart.
 * @param id {number} The unique id of the user from who we get the data (Can only be either 12 or 18)
 * @returns {Promise}
 */
const getUserActivityType = id => {
    return axios.get(`http://localhost:8000/user/${id}/performance`)
}

/**
 * Gets the daily score of the user, which id is specified, from the API. The API must be running.
 * @param id {number} The unique id of the user from who we get the data (Can only be either 12 or 18)
 * @returns {Promise}
 */
const getUserScore = id => {
    return axios.get(`http://localhost:8000/user/${id}/today-score`)
}

/**
 * Gets the key-data aka the nutritional data of the user which id is specified. The API must be running.
 * @param id {number} The unique id of the user from who we get the data (Can only be either 12 or 18)
 * @returns {Promise}
 */
const getUserKeyData = id => {
    return axios.get(`http://localhost:8000/user/${id}/key-data`)
}

/**
 * Gets the data from all the routes available in the API. The data must be then collected either in a .then block
 * or within an async function with the await keyword. The data will be available in an array.
 * In this array the data will be in the same order than the promises in the array passed as argument in Promise.all
 * @param id {number} The unique id of the user from who we get the data (Can only be either 12 or 18)
 */
export const getAllData = id => {
    return Promise.all([
        getMainUserData(id),
        getUserActivity(id),
        getUserAverageSessions(id),
        getUserActivityType(id),
        getUserScore(id),
        getUserKeyData(id)
    ])
}