import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {getAllData} from "./utils/utils";
import ErrorDisplay from "./components/ErrorDisplay";

let loading = true

// Display the interface with the skeleton loader before the data is get from the API
ReactDOM.render(
    <App loading={loading} />,
    document.getElementById('root')
)


getAllData(18)
    // Get and display the data, if it is available
    .then(results => {
        const userData = results[0].data.data
        const userActivity = results[1].data.data
        const userAverageSessions = results[2].data.data
        const userActivityType = results[3].data.data
        const userScore = results[4].data.data
        const userKeyData = results[5].data.data
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
                    keyData={userKeyData}
                    id={18}
                />
            </React.StrictMode>,
            document.getElementById('root')
        )
    })
    // If the data isn't available, display an error instead of the graphical interface
    .catch(error => {
        // Here, the API responded with an error
        if (error.response) {
            ReactDOM.render(
                <ErrorDisplay errorMsg={error.response.data}/>,
                document.getElementById('root')
            )
        //Here we didn't get any response from the API
        }else if(error.request) {
            ReactDOM.render(
                <ErrorDisplay errorMsg='check if the api is running'/>,
                document.getElementById('root')
            )
        }
        throw (error)
    })


