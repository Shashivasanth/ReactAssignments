
/** @jsx React.DOM */

var ListElement = React.createClass({
    render: function () {
        return <li>{this.props.data}</li>
    }
});


var List = React.createClass({
    render: function () {
        return <div>
            <h1>{this.props.name}</h1>
            <ul>{
                this.props.data.map(function (element, i) {
                    return <ListElement key={i} data={element}/>
                })
                }
            </ul>
        </div>
    }
});


var App = React.createClass({
    render: function () {
        return <div>
            <List name='Fruits' data={['Apple', 'Orange', 'Banana' ]}/>
        </div>
    }
});


React.render(<App/>, document.body);