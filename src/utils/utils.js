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
const fetchMainUserData = async id => {
    const response = await axios.get(`http://localhost:8000/user/${id}/`)
    return response.data.data
}

/**
 * Gets the daily activity data of the user, which id is specified, from the API. The API must be running.
 * @param id {number} The unique id of the user from who we get the data (Can only be either 12 or 18)
 * @returns {Promise}
 */
const fetchUserActivity = async id => {
    const response = await axios.get(`http://localhost:8000/user/${id}/activity`)
    return response.data.data
}

/**
 * Gets the daily average session length data of the user, which id is specified, from the API. The API must be running.
 * @param id {number} The unique id of the user from who we get the data (Can only be either 12 or 18)
 * @returns {Promise}
 */
const fetchUserAverageSessions = async id => {
    const response = await axios.get(`http://localhost:8000/user/${id}/average-sessions`)
    return response.data.data
}

/**
 * Gets the type of physical activity data of the user, which id is specified, from the API. The API must be running.
 * The data is used in the RadarChart.
 * @param id {number} The unique id of the user from who we get the data (Can only be either 12 or 18)
 * @returns {Promise}
 */
const fetchUserActivityType = async id => {
    const response = await axios.get(`http://localhost:8000/user/${id}/performance`)
    return response.data.data
}

/**
 * Gets the daily score of the user, which id is specified, from the API. The API must be running.
 * @param id {number} The unique id of the user from who we get the data (Can only be either 12 or 18)
 * @returns {Promise}
 */
const fetchUserScore = async id => {
    const response = await axios.get(`http://localhost:8000/user/${id}/today-score`)
    return response.data.data
}

/**
 * Gets the key-data aka the nutritional data of the user which id is specified. The API must be running.
 * @param id {number} The unique id of the user from who we get the data (Can only be either 12 or 18)
 * @param key {string} The key corresponding to the kind of nutriment
 * @returns {Promise}
 */
const fetchUserKeyData = async (id, key) => {
    const response = await axios.get(`http://localhost:8000/user/${id}/key-data`)
    return response.data.data[key]
}

export {
    fetchUserActivity,
    fetchUserScore,
    fetchUserAverageSessions,
    fetchUserActivityType,
    fetchMainUserData,
    fetchUserKeyData
}