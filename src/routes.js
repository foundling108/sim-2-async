import React from "react";
import { Switch, Route } from "react-router-dom";

import Auth from './components/Auth/Auth';
import Dash from './components/Dash/Dash';
import Wizard1 from './components/Wizard/Wizard1';
import Wizard2 from './components/Wizard/Wizard2';
import Wizard3 from './components/Wizard/Wizard3';
import Wizard4 from './components/Wizard/Wizard4';
import Wizard5 from './components/Wizard/Wizard5';

export default (
    <Switch>
        <Route component={Auth} path='/' exact/>
        <Route component={Dash} path='/dash' exact/>
        <Route component={Wizard1} path='/wizard/wizard1' exact/>
        <Route component={Wizard2} path='/wizard/wizard2' exact/>
        <Route component={Wizard3} path='/wizard/wizard3' exact/>
        <Route component={Wizard4} path='/wizard/wizard4' exact/>
        <Route component={Wizard5} path='/wizard/wizard5' exact/>
    </Switch>
)