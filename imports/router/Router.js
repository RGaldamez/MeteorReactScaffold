import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from './../ui/index.js';

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" component= {Index}/>
            </BrowserRouter>
        )
    }
}

export default Router;
