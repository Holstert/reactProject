import React from 'react'
import { hot } from 'react-hot-loader'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

import Layout from './components/Menu/Layout';
import HomePage from './containers/HomePage';
import CartPage from './containers/Cart'

function view() {
    return (
        <div>
            <BrowserRouter>
                <Layout>
                    <div className='marginMenu'>
                        <Switch>
                            <Route exact path="/" component={ HomePage }/>
                            <Route exact path="/CartPage" component={ CartPage }/>
                        </Switch>
                    </div>
                </Layout>
            </BrowserRouter>
        </div>
    )
}

export default hot(module)(view)