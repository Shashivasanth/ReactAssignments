var React = require("react");
var ViewMessages =  React.createClass  ({
    getInitialState: function() {
        return (messages: [] )
    },
    componentWillMount: function(){
        this.getMessages();
    },
    getMessages: function(){
        $.ajax({
            url: 'http://localhost:8085/MessageModel',
            dataType: 'json',
            method: 'GET',
            success: function(data) {
                console.log('data', data);
                messages = data;
            },
            error: function(err,res) {
                console.log('error in fetching');
            }
        })
    },
    render:function(){
        console.log('render');
        return {};
    }
});
module.exports = ViewMessages;
