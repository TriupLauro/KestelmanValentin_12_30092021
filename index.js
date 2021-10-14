import {callTheAPI} from "./config";
import {
    getMainUserData,
    getUserActivity,
    getUserActivityType,
    getUserAverageSessions, getUserKeyData,
    getUserScore
} from "./src/utils/utils";
import {
    mockMainUserData,
    mockUserActivity,
    mockUserActivityType,
    mockUserAverageSessions, mockUserKeyData,
    mockUserScore
} from "./src/mocks/mockedData";

/**
 * Retrieve user activity data
 * If callTheAPi is set to true (in config.js) calls the API
 * Otherwise, retrieve the data from the mocked file
 * @param {number} id Numeral identifier for the user which data is retrieved
 * @returns {Promise|Promise<*>}
 */
const acquireUserActivity = id => {
    return callTheAPI ? getUserActivity(id) : mockUserActivity(id)
}

/**
 * Retrieve user daily score
 * If callTheAPi is set to true (in config.js) calls the API
 * Otherwise, retrieve the data from the mocked file
 * @param {number} id Numeral identifier for the user which data is retrieved
 * @returns {Promise|Promise<*>}
 */
const acquireUserScore = id => {
    return callTheAPI ? getUserScore(id) : mockUserScore(id)
}

/**
 * Retrieve user average sport sessions lengths
 * If callTheAPi is set to true (in config.js) calls the API
 * Otherwise, retrieve the data from the mocked file
 * @param {number} id Numeral identifier for the user which data is retrieved
 * @returns {Promise|Promise<*>}
 */
const acquireUserAverageSessions = id => {
    return callTheAPI ? getUserAverageSessions(id) : mockUserAverageSessions(id)
}

/**
 * Retrieve user type of physical activity
 * If callTheAPi is set to true (in config.js) calls the API
 * Otherwise, retrieve the data from the mocked file
 * @param {number} id Numeral identifier for the user which data is retrieved
 * @returns {Promise|Promise<*>}
 */
const acquireUserActivityType = id => {
    return callTheAPI ? getUserActivityType(id) : mockUserActivityType(id)
}

/**
 * Retrieve user main data
 * If callTheAPi is set to true (in config.js) calls the API
 * Otherwise, retrieve the data from the mocked file
 * @param {number} id Numeral identifier for the user which data is retrieved
 * @returns {Promise|Promise<*>}
 */
const acquireMainUserData = id => {
    return callTheAPI ? getMainUserData(id) : mockMainUserData(id)
}

/**
 * Retrieve user key data - Relative to the nutrition
 * If callTheAPi is set to true (in config.js) calls the API
 * Otherwise, retrieve the data from the mocked file
 * @param {number} id Numeral identifier for the user which data is retrieved
 * @returns {Promise|Promise<*>}
 */
const acquireUserKeyData = id => {
    return callTheAPI ? getUserKeyData(id) : mockUserKeyData(id)
}

export {
    acquireUserActivity,
    acquireUserScore,
    acquireUserAverageSessions,
    acquireUserActivityType,
    acquireMainUserData,
    acquireUserKeyData
}

