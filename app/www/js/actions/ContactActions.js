/**
 * Created by Aarthi on 9/7/15.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher'),
    ContactEvents = require('../constants/ContactEvents'),
    ContactActions = {
        add: function(contact){
            AppDispatcher.dispatch({
                eventName: ContactEvents.ADD,
                value: contact
            });
        }
    };

module.exports = ContactActions;
