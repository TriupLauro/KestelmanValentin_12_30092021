//File containing all the mocked data and the function to access it by imitating the API calls
//Doesn't actually call the API
//Only data for users id 12 and 18

const USER_MAIN_DATA = [
    {
        id: 12,
        userInfos: {
            firstName: 'Karl',
            lastName: 'Dovineau',
            age: 31,
        },
        todayScore: 0.12,
        keyData: {
            calorieCount: 1930,
            proteinCount: 155,
            carbohydrateCount: 290,
            lipidCount: 50
        }
    },
    {
        id: 18,
        userInfos: {
            firstName: 'Cecilia',
            lastName: 'Ratorez',
            age: 34,
        },
        todayScore: 0.3,
        keyData: {
            calorieCount: 2500,
            proteinCount: 90,
            carbohydrateCount: 150,
            lipidCount: 120
        }
    }
]

const USER_ACTIVITY = [
    {
        userId: 12,
        sessions: [
            {
                day: '2020-07-01',
                kilogram: 80,
                calories: 240
            },
            {
                day: '2020-07-02',
                kilogram: 80,
                calories: 220
            },
            {
                day: '2020-07-03',
                kilogram: 81,
                calories: 280
            },
            {
                day: '2020-07-04',
                kilogram: 81,
                calories: 290
            },
            {
                day: '2020-07-05',
                kilogram: 80,
                calories: 160
            },
            {
                day: '2020-07-06',
                kilogram: 78,
                calories: 162
            },
            {
                day: '2020-07-07',
                kilogram: 76,
                calories: 390
            }
        ]
    },
    {
        userId: 18,
        sessions: [
            {
                day: '2020-07-01',
                kilogram: 70,
                calories: 240
            },
            {
                day: '2020-07-02',
                kilogram: 69,
                calories: 220
            },
            {
                day: '2020-07-03',
                kilogram: 70,
                calories: 280
            },
            {
                day: '2020-07-04',
                kilogram: 70,
                calories: 500
            },
            {
                day: '2020-07-05',
                kilogram: 69,
                calories: 160
            },
            {
                day: '2020-07-06',
                kilogram: 69,
                calories: 162
            },
            {
                day: '2020-07-07',
                kilogram: 69,
                calories: 390
            }
        ]
    }
]


const USER_AVERAGE_SESSIONS = [
    {
        userId: 12,
        sessions: [
            {
                day: 1,
                sessionLength: 30
            },
            {
                day: 2,
                sessionLength: 23
            },
            {
                day: 3,
                sessionLength: 45
            },
            {
                day: 4,
                sessionLength: 50
            },
            {
                day: 5,
                sessionLength: 0
            },
            {
                day: 6,
                sessionLength: 0
            },
            {
                day: 7,
                sessionLength: 60
            }
        ]
    },
    {
        userId: 18,
        sessions: [
            {
                day: 1,
                sessionLength: 30
            },
            {
                day: 2,
                sessionLength: 40
            },
            {
                day: 3,
                sessionLength: 50
            },
            {
                day: 4,
                sessionLength: 30
            },
            {
                day: 5,
                sessionLength: 30
            },
            {
                day: 6,
                sessionLength: 50
            },
            {
                day: 7,
                sessionLength: 50
            }
        ]
    }
]


const USER_PERFORMANCE = [
    {
        userId: 12,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 80,
                kind: 1
            },
            {
                value: 120,
                kind: 2
            },
            {
                value: 140,
                kind: 3
            },
            {
                value: 50,
                kind: 4
            },
            {
                value: 200,
                kind: 5
            },
            {
                value: 90,
                kind: 6
            }
        ]
    },
    {
        userId: 18,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 200,
                kind: 1
            },
            {
                value: 240,
                kind: 2
            },
            {
                value: 80,
                kind: 3
            },
            {
                value: 80,
                kind: 4
            },
            {
                value: 220,
                kind: 5
            },
            {
                value: 110,
                kind: 6
            }
        ]
    }
]

/**
 * Mock the response object in case the id provided isn't found
 * @param {number} id Numeral identifier for the user which data is retrieved
 * @returns {{response: {data: string}}}
 */
const errorObject = id => {
    return {
        response : {
            data : `can not find user id ${id}`
        }
    }
}

/**
 * Mock the data without calling the API - Returns the main user data
 * Uses the data from this file
 * @param {number} id Numeral identifier for the user which data is retrieved
 * @returns {Promise<unknown>}
 */
const mockMainUserData = id => {
    return new Promise((resolve, reject) => {
        const data = {
            data : {
                data : USER_MAIN_DATA.find(mock => mock.id === id)
            }
        }

        data.data.data ? resolve(data.data.data) : reject(errorObject(id))
    })
}

/**
 * Mock the data without calling the API - Returns the daily user activity : weight and burned calories
 * Uses the data from this file
 * @param {number} id Numeral identifier for the user which data is retrieved
 * @returns {Promise<unknown>}
 */
const mockUserActivity = id => {
    return new Promise ((resolve, reject) => {
        const data = {
            data : {
                data :
                    USER_ACTIVITY.find(mock => mock.userId === id)
            }
        }

        data.data?.data?.sessions ? resolve(data.data.data) : reject(errorObject(id))
    })
}

/**
 * Mock the data without calling the API - Returns the daily score
 * Uses the data from this file
 * @param {number} id Numeral identifier for the user which data is retrieved
 * @returns {Promise<unknown>}
 */
const mockUserScore = id => {
    return new Promise ((resolve, reject) => {
        const data = {
            data : {
                data :
                    USER_MAIN_DATA.find(mock => mock.id === id)?.todayScore
            }
        }

        data.data.data ? resolve(data.data.data) : reject(errorObject(id))
    })
}

/**
 * Mock the data without calling the API - Returns the average length of user's sports sessions (in minutes)
 * Uses the data from this file
 * @param {number} id Numeral identifier for the user which data is retrieved
 * @returns {Promise<unknown>}
 */
const mockUserAverageSessions = id => {
    return new Promise((resolve, reject) => {
        const data = {
            data : {
                data : USER_AVERAGE_SESSIONS.find(mock => mock.userId === id)
            }
        }

        data.data.data ? resolve(data.data.data) : reject(errorObject(id))
    })
}

/**
 * Mock the data without calling the API - Returns the type of physical activity for the user
 * Uses the data from this file
 * @param {number} id Numeral identifier for the user which data is retrieved
 * @returns {Promise<unknown>}
 */
const mockUserActivityType = id => {
    return new Promise((resolve, reject) => {
        const data = {
            data : {
                data : USER_PERFORMANCE.find(mock => mock.userId === id)
            }
        }

        data.data.data ? resolve(data.data.data) : reject(errorObject(id))
    })
}

/**
 * Mock the data without calling the API - Get the key data of the user : nutrition data
 * Uses the data from this file
 * @param {number} id Numeral identifier for the user which data is retrieved
 * @param key {string} The key corresponding to the kind of nutriment
 * @returns {Promise<unknown>}
 */
const mockUserKeyData = (id,key) => {
    return new Promise((resolve, reject) => {
        const data = {
            data : {
                data : USER_MAIN_DATA.find(mock => mock.id === id)?.keyData
            }
        }

        data.data.data ? resolve(data.data.data[key]) : reject(errorObject(id))
    })
}

export {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE,
    mockUserActivity,
    mockUserScore,
    mockUserAverageSessions,
    mockUserActivityType,
    mockMainUserData,
    mockUserKeyData
}

