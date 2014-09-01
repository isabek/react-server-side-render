var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link;

var App = React.createClass({
    displayName: 'App',
    render: function () {
        return (
            React.DOM.div(null,
                React.DOM.ul(null,
                    React.DOM.li(null,
                        React.DOM.a({href: "/user/isabek"}, "Isabek")
                    ),
                    React.DOM.li(null,
                        React.DOM.a({href: "/user/vitalik"}, "Vitalik")
                    )
                )
            )
            );
    }
});

module.exports = App;