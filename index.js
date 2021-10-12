import {callTheAPI} from "./config";
import {getUserActivity, getUserActivityType, getUserAverageSessions, getUserScore} from "./src/utils/utils";
import {mockUserActivity, mockUserActivityType, mockUserAverageSessions, mockUserScore} from "./src/mocks/mockedData";

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

export {
    acquireUserActivity,
    acquireUserScore,
    acquireUserAverageSessions,
    acquireUserActivityType
}

