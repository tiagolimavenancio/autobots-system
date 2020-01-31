import React from 'react';
import { Switch, Route } from 'react-router-dom';

import List from './pages/Parts/List';
import Create from './pages/Parts/Create';
import Edit from './pages/Parts/Edit';

export default function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={List} />
            <Route path='/create-part' component={Create} />
            <Route path='/edit-part/:id' component={Edit} />
        </Switch>
    )
}