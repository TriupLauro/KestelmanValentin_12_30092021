import {callTheAPI} from "./config";
import {getUserActivity, getUserScore} from "./src/utils/utils";
import {mockUserActivity, mockUserScore} from "./src/mocks/mockedData";

const acquireUserActivityData = id => {
    return callTheAPI ? getUserActivity(id) : mockUserActivity(id)
}

const acquireUserScore = id => {
    return callTheAPI ? getUserScore(id) : mockUserScore(id)
}

export {
    acquireUserActivityData,
    acquireUserScore
}

