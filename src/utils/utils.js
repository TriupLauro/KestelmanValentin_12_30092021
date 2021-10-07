import axios from "axios";

export const numberBetweenZeroAndOne = (props, propName, componentName) => {
    if (props[propName]) {
        let value = props[propName]
        if (typeof value !== 'number')  return new Error(`${propName} in ${componentName} is not a number`)
        if (value < 0 || value > 1) return new Error(`${propName} in ${componentName} should have a value between 0 and 1 included`)
    } else {
        return null
    }
}

const getMainUserData = id => {
    return axios.get(`http://localhost:8000/user/${id}/`)
}

const getUserActivity = id => {
    return axios.get(`http://localhost:8000/user/${id}/activity`)
}

const getUserAverageSessions = id => {
    return axios.get(`http://localhost:8000/user/${id}/average-sessions`)
}

const getUserActivityType = id => {
    return axios.get(`http://localhost:8000/user/${id}/performance`)
}

const getUserScore = id => {
    return axios.get(`http://localhost:8000/user/${id}/today-score`)
}

export const getAllData = id => {
    return Promise.all([
        getMainUserData(id),
        getUserActivity(id),
        getUserAverageSessions(id),
        getUserActivityType(id),
        getUserScore(id)
    ])
}