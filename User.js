var React = require('react');

var User = React.createClass({
    render: function () {
        return (
            React.DOM.div(null,
                React.DOM.h1(null, "User Id: ", this.props.userId)
            )
            );
    }
});

module.exports = User;