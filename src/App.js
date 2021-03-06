import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'


import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Room from './pages/Room'
import { AuthProvider } from './AuthService'
import LoggedInRoute from './LoggedInRoute'

const App = () => {
    return (
        <AuthProvider>
            <h1>Chat</h1>
            <Router>
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={SignUp} />
                    <LoggedInRoute exact path='/' component={Room} />
                </Switch>
            </Router>
        </AuthProvider>
    )
}

export default App