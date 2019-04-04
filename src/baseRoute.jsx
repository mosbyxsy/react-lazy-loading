import React from 'react';
import {HashRouter, Route, Switch, Redirect, NavLink} from 'react-router-dom';
import Home from './page/Home';
import New from './page/New';
import Article from './page/Article';

export default () => (
    <HashRouter>
        <div>
            <NavLink to='/'>home</NavLink>
            <NavLink to='new'>new</NavLink>
            <NavLink to='article'>article</NavLink>
        </div>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/new" component={New}/>
            <Route path="/article" component={Article}/>
            <Redirect to='/'/>
        </Switch>
    </HashRouter>
)

