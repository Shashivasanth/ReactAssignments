var App = React.createClass({  

  getInitialState: function() { 
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    return {hour: hour, minute: minute, second: second};
  },
  
  clockTick: function(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    this.setState({hour: hour, minute: minute, second: second});
  },
  
  render: function() { 
    return <h1>
            {this.state.hour}:
            {this.state.minute}:
            {this.state.second}
           </h1>
  }, 
  
  componentDidMount: function(){
    setInterval(this.clockTick, 1000);
  }
});


React.render(<App />, document.body);