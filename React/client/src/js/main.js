var React = require ("react");
var ReactDOM = require ("react-dom");
var {Router, Route,  browserHistory} = require('react-router');
var GmailBox = require('./Components/GmailBox');
var NavBar = require('./Components/NavBar');
var ViewMessages = require('./Components/ViewMessages');

var MainComponent = React.createClass({
    render:function()
    {
        return(
            <div className="MainComponent">
            <NavBar/>
            {this.props.children}
        </div>);
    }
})

ReactDOM.render(( <Router history = {browserHistory}>
        <Route path ="/"  component={MainComponent} >
            <Route path ="/gmail"  component={GmailBox} />
            <Route path ="/view"  component={ViewMessages} />
        </Route>
        </Router>), document.getElementById('app'));
