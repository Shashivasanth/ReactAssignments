console.log("start");
var App = React.createClass({

    getInitialState:function(){
        console.log('getInitialState');
        return {status: true};
    },

    getDefaultProps:function(){
        console.log('getDefaultProps');
        return{name: 'Shashi'};
    },

    render:function(){
        console.log('render');
        return {};
    }

});
