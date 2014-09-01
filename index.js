/**
 * @jsx React.DOM
 */
var React = require('react'),
    App = require('./App'),
    User = require('./User'),
    Router = require('react-router'),
    Routes = Router.Routes,
    Route = Router.Route;

var routes = (
    <Routes>
        <Route handler={App}>
            <Route name="user" path="user/:userId" handler={User}/>
        </Route>
    </Routes>
    );


React.renderComponent(routes, document.getElementById('content'));