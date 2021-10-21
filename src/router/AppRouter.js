import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import App from 'App'

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" component={App} />
                </Switch>
            </div>
        </Router>
    )
}
