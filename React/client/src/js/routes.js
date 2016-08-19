var React = require ('react');
var {Router, Route,  browserHistory} = require('react-router');


var ViewMessagesFromDB = require('./Components/ViewMessagesFromDB') ;

module.exports  = {<Router history = {browserHistory}>
     <Route>
       <Route  path="/ViewMessagesFromDB" component={ViewMessagesFromDB} />
   </Route></Router>
};
