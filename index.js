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

const acquireUserActivity = id => {
    return callTheAPI ? getUserActivity(id) : mockUserActivity(id)
}

const acquireUserScore = id => {
    return callTheAPI ? getUserScore(id) : mockUserScore(id)
}

const acquireUserAverageSessions = id => {
    return callTheAPI ? getUserAverageSessions(id) : mockUserAverageSessions(id)
}

const acquireUserActivityType = id => {
    return callTheAPI ? getUserActivityType(id) : mockUserActivityType(id)
}

const acquireMainUserData = id => {
    return callTheAPI ? getMainUserData(id) : mockMainUserData(id)
}

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

