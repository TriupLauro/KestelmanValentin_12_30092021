import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {getAllData} from "./utils/utils";
import ErrorDisplay from "./components/ErrorDisplay";

let loading = true

ReactDOM.render(
    <App loading={loading} />,
    document.getElementById('root')
)

getAllData(18)
    .then(results => {
        const userData = results[0].data.data
        const userActivity = results[1].data.data
        const userAverageSessions = results[2].data.data
        const userActivityType = results[3].data.data
        const userScore = results[4].data.data
        loading = false

        ReactDOM.render(
            <React.StrictMode>
                <App
                    loading={loading}
                    mainData={userData}
                    activityData={userActivity}
                    averageSessionsData={userAverageSessions}
                    activityTypeData={userActivityType}
                    scoreData={userScore}
                />
            </React.StrictMode>,
            document.getElementById('root')
        )
    })
    .catch(error => {
        if (error.response) {
            ReactDOM.render(
                <ErrorDisplay errorMsg={error.response.data}/>,
                document.getElementById('root')
            )
        }else if(error.request) {
            ReactDOM.render(
                <ErrorDisplay errorMsg='check if the api is running'/>,
                document.getElementById('root')
            )
        }
        throw (error)
    })


