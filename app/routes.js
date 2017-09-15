import React from 'react'
import {
    Route,
    IndexRoute
} from 'react-router'
import App from './containers/App'
import About from './containers/About'
import Clues from './containers/Clues'
import Product from './containers/Product'
import NotFoundRoute from './containers/NotFoundRoute'
import Test from './containers/Test';
const routes = (
    <Route>
        <Route path="/" component={App}>
            <IndexRoute component={About}/>
            <Route path="clue" component={Clues}/>
            <Route path="product" component={Product}/>
            <Route path="test" component={Test}/>
        </Route>
        <Route path="*" component={NotFoundRoute}></Route>
    </Route>
);

export default routes
