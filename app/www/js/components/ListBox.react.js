var React = require('react'),
    ContactStore = require('../stores/ContactStore'),
    ReactPropTypes = React.PropTypes,
    Dom = React.DOM,
    ListBox = React.createClass({
        _onChange: function() {
            var contacts = ContactStore.getAll();
            this.setState({
                items: contacts
            });
        },
        displayName: 'ListBox',
        propTypes: {
            key: ReactPropTypes.string.isRequired,
            className: ReactPropTypes.string,
            items: ReactPropTypes.object
        },
        getInitialState: function(){
            return {
                items: this.props.items || {}
            }
        },
        componentDidMount: function(){
            ContactStore.addChangeListener(this._onChange);
        },
        componentWillUnmount: function() {
            ContactStore.removeChangeListener(this._onChange);
        },
        render: function() {
            var items = this.state.items,
                list = [];

            if(Object.keys(items).length < 1){
                return null;
            }

            for(var key in items){
                list.push(Dom.li({key: key}, key +' : ' + items[key]));
            }

            return Dom.ul({key: 'listul'}, list);
        }
    });

module.exports = ListBox;
