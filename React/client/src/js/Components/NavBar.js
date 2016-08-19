var React = require("react");
var {Link} = require('react-router');
var NavBar  =   React.createClass({
    render:function(){
        return (
            <div className="container-fluid">
        	<div className="row">
        		<div className="col-md-12">
        			<nav className="navbar navbar-default navbar-inverse" role="navigation">
        				<div className="navbar-header">

        					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        						 <span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
        					</button> <a className="navbar-brand" href="#">Brand</a>
        				</div>

        				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        					<ul className="nav navbar-nav">
                            <li><Link to="/gmail" activeClassName="active">GmailBox</Link></li>
                            <li><Link to="/view" activeClassName="active">ViewMessagesFromDB</Link></li>
        					</ul>
        					<form className="navbar-form navbar-left" role="search">
        						<div className="form-group">
        							<input type="text" className="form-control" />
        						</div>
        						<button type="submit" className="btn btn-default">
        							Submit
        						</button>
        					</form>
        					<ul className="nav navbar-nav navbar-right">
        						<li>
        							<a href="#">Link</a>
        						</li>
        						<li className="dropdown">
        							 <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown<strong className="caret"></strong></a>
        							<ul className="dropdown-menu">
        								<li>
        									<a href="#">Action</a>
        								</li>
        								<li>
        									<a href="#">Another action</a>
        								</li>
        								<li>
        									<a href="#">Something else here</a>
        								</li>
        								<li className="divider">
        								</li>
        								<li>
        									<a href="#">Separated link</a>
        								</li>
        							</ul>
        						</li>
        					</ul>
        				</div>

        			</nav>
        		</div>
        	</div>
        </div>
        );
    }
});

module.exports = NavBar;
