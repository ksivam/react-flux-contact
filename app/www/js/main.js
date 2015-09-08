var React = require('react'),
    ContactApp = require('./components/ContactApp.react'),
    contactAppElement = React.createElement(ContactApp);

React.render(contactAppElement, document.getElementById('contactsapp'));
