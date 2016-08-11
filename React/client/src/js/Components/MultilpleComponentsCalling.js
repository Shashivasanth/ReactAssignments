var FruitsList = React.createClass({
    render: function () {
        return <div>
        <h1>{this.props.name}</h1>
        <ul>
        <li>Apple</li>
        <li>Orange</li>
        <li>Banana</li>
        </ul>
        </div>
    }
});


var App = React.createClass({
    render: function () {
        return <div>
        <FruitsList name='Fruits'/>
        </div>
    }
});


React.render(<App/>, document.body);