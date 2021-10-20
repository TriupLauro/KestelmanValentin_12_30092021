import {callTheAPI} from "./config";
import {
    fetchMainUserData,
    fetchUserActivity,
    fetchUserActivityType,
    fetchUserAverageSessions,
    fetchUserKeyData,
    fetchUserScore
} from "./src/utils/utils";
import {
    mockMainUserData,
    mockUserActivity,
    mockUserActivityType,
    mockUserAverageSessions,
    mockUserKeyData,
    mockUserScore
} from "./src/mocks/mockedData";

/**
 * Retrieve user activity data
 * If callTheAPi is set to true (in config.js) calls the API
 * Otherwise, retrieve the data from the mocked file
 * @param {number} id Numeral identifier for the user which data is retrieved
 * @returns {Promise|Promise<*>}
 */
const getUserActivity = id => {
    return callTheAPI ? fetchUserActivity(id) : mockUserActivity(id)
}

/**
 * Retrieve user daily score
 * If callTheAPi is set to true (in config.js) calls the API
 * Otherwise, retrieve the data from the mocked file
 * @param {number} id Numeral identifier for the user which data is retrieved
 * @returns {Promise|Promise<*>}
 */
const getUserScore = id => {
    return callTheAPI ? fetchUserScore(id) : mockUserScore(id)
}

/**
 * Retrieve user average sport sessions lengths
 * If callTheAPi is set to true (in config.js) calls the API
 * Otherwise, retrieve the data from the mocked file
 * @param {number} id Numeral identifier for the user which data is retrieved
 * @returns {Promise|Promise<*>}
 */
const getUserAverageSessions = id => {
    return callTheAPI ? fetchUserAverageSessions(id) : mockUserAverageSessions(id)
}

/**
 * Retrieve user type of physical activity
 * If callTheAPi is set to true (in config.js) calls the API
 * Otherwise, retrieve the data from the mocked file
 * @param {number} id Numeral identifier for the user which data is retrieved
 * @returns {Promise|Promise<*>}
 */
const getUserActivityType = id => {
    return callTheAPI ? fetchUserActivityType(id) : mockUserActivityType(id)
}

/**
 * Retrieve user main data
 * If callTheAPi is set to true (in config.js) calls the API
 * Otherwise, retrieve the data from the mocked file
 * @param {number} id Numeral identifier for the user which data is retrieved
 * @returns {Promise|Promise<*>}
 */
const getMainUserData = id => {
    return callTheAPI ? fetchMainUserData(id) : mockMainUserData(id)
}

/**
 * Retrieve user key data - Relative to the nutrition
 * If callTheAPi is set to true (in config.js) calls the API
 * Otherwise, retrieve the data from the mocked file
 * @param {number} id Numeral identifier for the user which data is retrieved
 * @returns {Promise|Promise<*>}
 */
const getUserKeyData = id => {
    return callTheAPI ? fetchUserKeyData(id) : mockUserKeyData(id)
}

export {
    getUserActivity,
    getUserScore,
    getUserAverageSessions,
    getUserActivityType,
    getMainUserData,
    getUserKeyData
}

