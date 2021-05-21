import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  App   from '../App';
import { Pdf }  from '../components/Pdf';

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path= '/' component= { App } />
                <Route exact path= '/pdf' component= { Pdf }/>
            </Switch>
        </BrowserRouter>
    )
}