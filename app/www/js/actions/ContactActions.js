/**
 * Created by Aarthi on 9/7/15.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher'),
    ContactEvents = require('../constants/ContactEvents'),
    _socket,
    ContactActions = {
        connect: function(credentials) {
            var that = this;
            if(!_socket) {
                _socket = io.connect('http://localhost:2121');
                _socket.on('contacts', function(contacts){
                    var names = Object.keys(contacts);
                    names.forEach(function(name){
                        that.add({
                            name: name,
                            status: contacts[name]
                        });
                    });
                });
            }
        },
        disconnect: function(){
            if(_socket){
                _socket.disconnect();
            }
        },
        add: function(contact){
            AppDispatcher.dispatch({
                eventName: ContactEvents.ADD,
                value: contact
            });
        }
    };

module.exports = ContactActions;
