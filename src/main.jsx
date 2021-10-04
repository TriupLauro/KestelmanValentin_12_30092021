import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS} from "./mocks/mockedData";

const userData = USER_MAIN_DATA.find(data => data.id === 18)
const userActivity = USER_ACTIVITY.find(data => data.userId === 18)
const userAverageSessions = USER_AVERAGE_SESSIONS.find(data => data.userId === 18)

ReactDOM.render(
  <React.StrictMode>
    <App mainData={userData} activityData={userActivity} averageSessionsData={userAverageSessions}/>
  </React.StrictMode>,
  document.getElementById('root')
)
