/**
 * Created by Aarthi on 9/7/15.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher'),
    ContactEvents = require('../constants/ContactEvents'),
    EventEmitter = require('events').EventEmitter,
    CHANGE_EVENT = 'contact-store-change',
    ContactStore = {
        _contacts: [],
        _emitChange: function(){
            EventEmitter.prototype.emit(CHANGE_EVENT);
        },
        dispatchToken: '',
        addChangeListener: function(callback){
            EventEmitter.prototype.on(CHANGE_EVENT, callback)
        },
        removeChangeListener: function(callback){
          EventEmitter.prototype.removeListener(CHANGE_EVENT, callback);
        },
        add: function(contact) {
            this._contacts.push(contact);
            this._emitChange();
        },
        getAll: function(){
            return this._contacts;
        }
    };

ContactStore.dispatchToken =  AppDispatcher.register(function(payload){
    switch(payload.eventName){
        case ContactEvents.ADD: {
            ContactStore.add(payload.value);
        }
    }
});

module.exports = ContactStore;
