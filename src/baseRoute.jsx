import React from 'react';
import {HashRouter, Route, Switch, Redirect, NavLink} from 'react-router-dom';
import Home from './page/home/home';
import Loading from './utils/loading';
import {asyncComponent} from './utils/asyncComponent';
import Loadable from 'react-loadable';

// 使用自定义高阶组件懒加载
const New = asyncComponent(()=>import(/* webpackChunkName: 'new' */ './page/new/new.jsx'));
// 使用react-loadable
const Article = Loadable({
    loader: () => import(/* webpackChunkName: 'article' */ './page/article/article.jsx'),
    loading: Loading
});

export default () => (
    <HashRouter>
        <div className='app-nav'>
            <NavLink to='/' replace>home</NavLink>
            <NavLink to='new' replace>new</NavLink>
            <NavLink to='article' replace>article</NavLink>
        </div>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/new" component={New}/>
            <Route path="/article" component={Article}/>
            <Redirect to='/'/>
        </Switch>
    </HashRouter>
)

