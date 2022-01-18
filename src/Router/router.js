import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Signin from '../Pages/Signing/Signin'
import SignUp from '../../src/Pages/SignUp/SignUp'
import Dashboard from '../Pages/Dashboard/dashboard'

function RouterDom() {
    return (
            <BrowserRouter>
                <Switch>
                <Route exact path="/" component={Signin}/>
                <Route path="/SignUp" component={SignUp}/>
                <Route path="/Dashboard" component={Dashboard}/>

                    </Switch>
                    </BrowserRouter>
    )
}
export default RouterDom