import {callTheAPI} from "./config";
import {getUserActivity} from "./src/utils/utils";
import {mockUserActivity} from "./src/mocks/mockedData";

const acquireUserActivityData = id => {
    return callTheAPI ? getUserActivity(id) : mockUserActivity(id)
}

const manageUserActivityData = id => {
    let isLoading = true
    let isError = false
    let data = []
    acquireUserActivityData(id)
        .then(responseData => {
            isLoading = false
            data = responseData
            return {
                isLoading,
                isError,
                data
            }
        })
        .catch(error => {
            isLoading = false
            isError = error
            return {
                isLoading,
                isError,
                data
            }
        })
    return {
        isLoading,
        isError,
        data
    }
}

export {
    manageUserActivityData,
    acquireUserActivityData
}

