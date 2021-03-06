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
import {useEffect, useState} from "react";

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
 * @param key {string} The key corresponding to the kind of nutriment
 * @returns {Promise|Promise<*>}
 */
const getUserKeyData = (id,key) => {
    return callTheAPI ? fetchUserKeyData(id , key) : mockUserKeyData(id, key)
}

/**
 * Function used to call the API in the componentDidMount method of the class component
 * Can be used in any class component, as long as you pass the adequate parameters
 * @param {function} setState The this.setState function of the class component
 * @param {function} requestFunction The function used to get the data (see the above functions)
 * @param {...string|number} requestArgs The arguments of the request function. Must have at least the user Id
 */
const httpRequest = (setState, requestFunction, ...requestArgs) => {
    requestFunction(...requestArgs)
        .then(responseData => {
            setState({isLoading : false, data : responseData})
        })
        .catch(error => {
            if(error.response) {
                setState({isLoading: false, error: error.response.data})
            }else{
                setState({isLoading: false, error: 'Is the API running ?'})
            }
        })
}

/**
 * Custom Hook version of httpRequest
 * Used to call the API in a functional component
 * Take the appropriate function to get the data (see above get functions)
 * The three return values should be used as component state
 * @param {function} requestFunction The get function to access the api/mocked data
 * @param {...string|number} requestArgs The arguments of the request function. Should have at lease the user Id
 * @returns {{data: {}, loading: boolean, error: null|string}}
 */
const useRequest = (requestFunction, ...requestArgs) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState({})

    useEffect(() => {
        requestFunction(...requestArgs)
            .then(responseData => {
                setData(responseData)
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
                error.response ? setError(error.response.data) : setError('Is the API running ?')
            })
    },[])

    return {
        loading,
        error,
        data
    }
}

export {
    getUserActivity,
    getUserScore,
    getUserAverageSessions,
    getUserActivityType,
    getMainUserData,
    getUserKeyData,
    httpRequest,
    useRequest
}

